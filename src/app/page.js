import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/Hero";

const page = () => {
  return (
    <div className='bg-[url("/img/bg.png")] bg-cover bg-no-repeat bg-center  h-[900px] max-sm:h-[800px]'>
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
