import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-[#f6f8fc] w-full h-[90vh]">
        <div className="grid grid-cols-2 h-full place-items-center px-[80px]">
          <div>
            <h1 className="text-blue-900 text-4xl font-bold  leading-[50px]">
              Discover Breathtaking Photography Galleries.
            </h1>
            <p className="pe-12 text-lg py-8 pb-12 font-semibold text-gray-500 ">
              Unveil the Artistry of Moments Frozen in Time. Witness the World's
              Wonders Through Our Lens and explore the extraordinary through the
              eyes of talented Photographers
            </p>
            <Link
              to="/signup"
              className="bg-[#3b82f6] text-white font-bold py-3 px-12 rounded "
            >
              Explore
            </Link>
          </div>
          <img
            src="https://media.istockphoto.com/id/499022574/photo/young-man-using-dslr-camera.jpg?s=612x612&w=0&k=20&c=3DnNcfOoVmmMXKt9QTBBzYZyRzsIQy7BCU9OT1xpIzM="
            alt="A man with camera"
            className="rounded h-[320px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
