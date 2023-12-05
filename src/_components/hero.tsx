import React from "react";
import Hands from '../../public/hands.png'
import Image from "next/image";
import Bars from '../../public/bars.png'

const Hero = () => {
  return (
    <div className="bg-[#E1E9F9] mx-auto py-16 px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <div className="col-span-1">
          <p className="text-6xl font-normal leading-[96px]">
            Participate in election from <span className="text-[#008000]">anywhere</span>, with secured blockchain
            technology
          </p>

          <div>
            <p className="text-xl font-medium leading-[34px]">
              Delve into the intricacies of this groundbreaking technology and
              its potential impact on the democratic process.
            </p>
            <button className="py-[22px] px-[65px] border-2 border-black bg-[#008000] text-[#FAFAFA] rounded-xl text-[14px] shadow-md shadow-[#2E2F35]">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative col-span-1">
            <div className="h-5/6">
            <Image src={Hands} alt="hands" width={600} className="h-full" />
            </div>
           <div className="right-0 bottom-0 absolute">
           <Image src={Bars} alt="bars" width={150} height={250}  />
           </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
