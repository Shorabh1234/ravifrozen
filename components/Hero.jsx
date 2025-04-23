import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="mb-7   max-md:gap-3 max-md:flex-col flex max-w-[1325px] mx-auto w-full   items-end justify-between">
      <div className="max-w-[900px] w-full max-md:justify-center px-4 ">
        <h1
          className="text-white italic mx-auto xl:text-[74px] lg:text-[65px] md:text-[50px] sm:text-[40px] text-[25
        px] font-semibold leading-[110%]   max-w-[873px] w-full  max-md:pt-[50px] max-sm:pt-[30px] pt-[76px]  sm:leading-[110%] max-sm:text-center"
        >
          Cold Chain Service now just a Click away
        </h1>
        <p className="text-white  text-base max-md:text-[18px] max-sm:text-[12px] max-sm:text-center lg:text-2xl leading-relaxed font-medium pt-4 sm:pt-5 max-w-[640px]  w-full ">
          We provide a Plug'n'Play model for temperature-sensitive products,
          empowering our customers with the essential tools to expand their
          business while we ensure the preservation and transportation of
          perishable goods.
        </p>

        <div className="flex gap-3.5 pt-10 max-sm:justify-center pb-5">
          <Link href="#">
            <div className="bg-white rounded-full hover:bg-transparent hover:border-white border max-w-[150px] w-full h-[48px] text-[#29E0FF] font-bold cursor-pointer flex justify-center items-center transition-all duration-700 group">
              <button
                type="submit"
                className="text-[#29E0FF]  cursor-pointer  bg-clip-text group-hover:text-white! rounded-full w-[150px] h-[48px]  font-bold leading-[120%]"
              >
                Get Started
              </button>
            </div>
          </Link>

          <button
            type="submit"
            className="rounded-[100px] border-white border max-w-[150px] w-full h-[48px] text-[white] font-bold cursor-pointer hover:bg-white hover:text-[#29E0FF]"
          >
            Learn More
          </button>
        </div>
      </div>
      <div>
        <Image src="/img/truck.png" width={800} height={443} alt="hero" />
      </div>
    </div>
  );
};
export default Hero;
