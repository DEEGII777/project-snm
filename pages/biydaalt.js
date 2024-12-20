import { useState } from "react";

const data = [
    { id: 8, name: "Ariunbayr", nas: 16 },
    { id: 12, name: "Badraa", nas: 16 },
    { id: 3, name: "Bill", nas: 21 },
    { id: 5, name: "Boldoo", nas: 21 },    
    { id: 15, name: "Gan-Erdene", nas: 21 },
    { id: 14, name: "Gunbileg", nas: 16 },
    { id: 1, name: "Tuvshin", nas: 16 },
    { id: 2, name: "Temuugei", nas: 16 },
    { id: 4, name: "Temulan", nas: 16 },    
    { id: 6, name: "Munkhnaran", nas: 16 },
    { id: 7, name: "Munkhbaysgalan", nas: 16 },
    { id: 9, name: "Erdene-Jargal", nas: 16 },
    { id: 10, name: "Siilen", nas: 16 },
    { id: 11, name: "Nomio", nas: 16 },
    { id: 13, name: "Delgermurun", nas: 21 },
    { id: 16, name: "Jargal", nas: 16 },
    { id: 17, name: "Undrakh", nas: 16 },
    { id: 18, name: "Khangarid", nas: 21 },
    { id: 19, name: "Chinbiligt", nas: 16 },
];

export default function Sfilter() {
    const [search, setSearch] = useState("");
    const [grid, setGrid] = useState(false);

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.nas.toString().includes(search)
    );

    return (
        <div className="w-full min-h-screen bg-gray-200 px-80 flex flex-col">

            <button
                className="fixed top-20 left-20 px-10 py-4 text-white bg-blue-200 shadow-md shadow-black rounded-lg"
                onClick={() => setGrid(!grid)}
            >{grid ? "Hi" : "Sainuu"}
            </button>

            <div className="w-full h-[100px] flex items-center flex-col gap-4 pt-3 ">
                <p className="font-bold text-xl shadow-sm text-black">11B Deegii</p>
                <input
                    className="text-black border bg-gray-200 flex border-black shadow-black shadow-md pl-1 py-1  w-full shadow-sm"
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
       <div className={`mt-8 flex flex-col ${grid ? "grid grid-cols-2 gap-2 " : ""}`}>
                {filteredData.length > 0 ? (
                    filteredData.map((data) => (
                        <div
                            key={data.id}
                            className="w-full h-[100px] rounded-lg border border-blue-200 mt-4 flex justify-center flex-col shadow-sm shadow-black"
                        >
                            <p className="text-xl text-purple-500 font-bold text-opacity-80 pl-2">
                                {data.name}
                            </p>
                            <p className="text-lg text-pink-900 font-bold text-opacity-80 pl-2">
                                nas: {data.nas}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="text-black text-lg">No result for: {search}</div>
                )}
            </div>
        </div>
    );
}