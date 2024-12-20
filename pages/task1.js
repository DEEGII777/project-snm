export default function CV() {
  return (
    <div>
      <p className="text-black-500 text-4xl font-extrabold mt-4 ml-6 text-center">
        Our blog
      </p>
      <div className="flex space-x-6">
        <div className="h-80 w-60 mt-14 image-center ml-20">
          <img src="snm.jpg" alt="image"/>
          <p className="text-black-500 text-xl text-center font-semibold mt-4 ml-12"> Post 1 Headline</p>
          <p className="text-black-500 text-m text-center mt-2 ml-8">Sample small text ipsum dolor sit amet.</p>
          <p className=" text-lime-500 text-s text-center mt-2 ml-8">WED JUL 22 2020</p>
          <button class="w-24  h-12 bg-gray-600 rounded-lg text-white hover:bg-gray-700 button-center "> Read More</button>
        </div>
        <div>
            <img className="h-60 w-80 ml-10" src="snm2.jpg" alt="image"/>
            <p className=" text-black-500 text-xl text-center font-semibold mt-4 ml-12">Post 2 Headline</p>
            <p className="text-black-500 text-m text-center mt-2 ml-8">Sample small text ipsum dolor sit amet.</p>
            <p className=" text-lime-500 text-s text-center mt-2 ml-8">WED JUL 22 2020</p>
            <button class=" button-center w-24  h-12 bg-gray-600 rounded-lg text-white hover:bg-gray-700  "> Read More</button>
        </div>
        <div>
          <img className="h-60 w-8- ml-10" src="boldoo.webp" ></img>
          <p className="text-black-500 text-xl text-center font-semibold mt-4 ml-12">Erdenebolders</p>
          <p className="text-black-500 text-m text-center mt-2 ml-8">Sample small text ipsum dolor sit amet.</p>
          <p className=" text-lime-500 text-s text-center mt-2 ml-8">WED JUL 22 2020</p>
          <button class="w-24  h-12 bg-gray-600 rounded-lg text-white hover:bg-gray-700 button-center "> Read More</button>


        </div>
      </div>
    </div>
  );
}
