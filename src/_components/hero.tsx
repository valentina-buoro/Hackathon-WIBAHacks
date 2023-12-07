import React from "react";
import Hands from '../../public/hands.png'
import Image from "next/image";
import Bars from '../../public/bars.png'

const Hero = () => {
  return (
    <div className="bg-[#E1E9F9] mx-auto py-16 px-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <div className="col-span-1">
          <p className="text-3xl md:text-4xl lg:text-6xl font-normal md:leading-[96px]">
            Participate in election from <span className="text-[#008000]">anywhere</span>, with secured blockchain
            technology
          </p>

          <div>
            <p className="text-lg md:text-xl font-medium md:leading-[34px] mt-4 mb-6 lg:mt-6 lg:mb-12">
              Delve into the intricacies of this groundbreaking technology and
              its potential impact on the democratic process.
            </p>
            <button className="py-[22px] px-[65px]  bg-[#008000] text-[#FAFAFA] rounded-lg md:rounded-xl text-[14px] shadow-md shadow-[#2E2F35]">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative col-span-1">
            <div className="h-5/6 w-[300px] lg:w-[600px]">
            <Image src={Hands} alt="hands"  className="h-full w-full object-cover" />
            </div>
           <div className="right-0 bottom-0 absolute w-[100px] lg:[150px] h-[150px] lg:h-[250px]">
           <Image src={Bars} alt="bars" className="w-full h-full object-cover"  />
           </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
