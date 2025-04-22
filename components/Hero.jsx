import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mb-7 pl-4 max-md:gap-3 max-md:flex-col flex max-w-[1300px] w-full m-auto items-end justify-between">
      <div className="max-w-[900px] w-full max-md:justify-center ">
        <h1 className="text-white italic mx-auto xl:text-[73px] lg:text-[60px] md:text-[55px] sm:text-[45px] text-[30px] font-semibold leading-[110%]  max-w-[873px] w-full  max-md:pt-[50px] max-sm:pt-[30px] pt-[76px]">
          Cold Chain Service now just a Click away
        </h1>

        <p className="text-white  text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium pt-4 sm:pt-5 max-w-[90%] md:max-w-[600px] lg:max-w-[700px] w-full ">
          We provide a Plug'n'Play model for temperature-sensitive products,
          empowering our customers with the essential tools to expand their
          business while we ensure the preservation and transportation of
          perishable goods.
        </p>

        <div className="flex gap-3.5 pt-10 max-sm:justify-center pb-5">
          <button
            type="submit"
            className="rounded-[100px] bg-white w-[150px] h-[48px]  text-[#00F2FE] font-bold cursor-pointer hover:text-white hover:bg-[#00F2FE] duration-300"
          >
            Get Started
          </button>

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
