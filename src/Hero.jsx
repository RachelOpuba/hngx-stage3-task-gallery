import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-[#f6f8fc] w-full h-auto  py-[80px]">
        <div className="grid md:grid-cols-2 grid-cols-1 h-full place-items-center px-0 md:px-[80px]">
          <div className="order-2 md:order-1">
            <h1 className="text-blue-900 text-3xl md:text-4xl font-bold  leading-[50px] pt-8 md:pt-0 px-4 md:px-0 text-center md:text-start">
              Discover Breathtaking Photography Galleries.
            </h1>
            <p className="md:pe-12 text-lg py-4 md:py-8 pb-8 md:pb-12 font-semibold text-gray-500 px-4 md:px-0 ">
              Unveil the Artistry of Moments Frozen in Time. Witness the World's
              Wonders Through Our Lens and explore the extraordinary through the
              eyes of talented Photographers
            </p>
            <div className="flex md:justify-start justify-center items-center">
              <Link
                to="/signup"
                className="bg-[#3b82f6] text-white font-bold py-3 px-12 rounded "
              >
                Explore
              </Link>
            </div>
          </div>
          <img
            src="https://media.istockphoto.com/id/499022574/photo/young-man-using-dslr-camera.jpg?s=612x612&w=0&k=20&c=3DnNcfOoVmmMXKt9QTBBzYZyRzsIQy7BCU9OT1xpIzM="
            alt="A man with camera"
            className="rounded h-[320px] order-1 md:order-2"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
