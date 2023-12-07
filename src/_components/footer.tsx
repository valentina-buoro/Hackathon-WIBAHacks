import { Voltaire } from "next/font/google";
import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";
import Phone from "../../public/phone.svg";
import Vote from "../../public/vote.svg";
import Facebook from "../../public/facebook.svg";
import Youtube from "../../public/youtube.svg";
import Linkedin from "../../public/linkedin.svg";
import Twitter from "../../public/twitter.svg";

const Footer = () => {
  return (
    <div className="px-8 lg:px-20">
      <div className="flex items-center justify-center border-b border-[#D9D9D9] pb-10 pt-6">
        <span className="text-[#3366CC] font-black flex md:text-[28.777px] md:leading-[ 25.899px] items-center justify-center">
          <span className="w-[40px] h-[40px] md:w-[90px] md:h-[90px] flex items-center justify-end">
            <Image src={Logo} alt="logo" />{" "}
          </span>
          <span>TrustBallot</span>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-5 lg:px-10 py-14">
        <div>
          <p className="md:text-xl text-xs font-semibold ">
            Banana Island, Ikoyi, Lagos State, Nigeria
          </p>
        </div>
        <div className="md:text-xl text-xs font-medium flex flex-col items-start space-y-3 md:space-y-10">
          <p>Home</p>
          <p>Verification Process</p>
          <p>Vote</p>
        </div>
        <div className="md:text-xl text-xs tracking-tighter md:tracking-normal font-medium flex flex-col space-y-3 md:space-y-8">
          <p className="flex">
            {" "}
            <span className="w-4 md:w-5 mr-2">
              {" "}
              <Image src={Phone} alt="hello" className="w-full" />
            </span>{" "}
            <span>+234 815 456 7890</span>
          </p>
          <p className="flex">
            <span className="w-4 md:w-5 mr-2">
              <Image src={Vote} alt="hello" className="w-full" />
            </span>
            <span>voteme@gmail.com</span>
          </p>

          <div className="flex space-x-3 items-center">
            <span className="w-4 md:w-5 mr-2">
              <Image src={Facebook} alt="hello" className="w-full" />
            </span>
            <span className="w-4 md:w-5 mr-2">
              <Image src={Youtube} alt="hello" className="w-full" />
            </span>
            <span className="w-4 md:w-5 mr-2">
              <Image src={Linkedin} alt="hello" className="w-full" />
            </span>
            <span className="w-4 md:w-5 mr-2">
              <Image src={Twitter} alt="hello" className="w-full" />
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-lg text-xs md:text-sm lg:rounded-3xl bg-[#D9D9D9] py-3 px-2 lg:py-6 lg:px-5">
        <div>
          <span>Site by VoteMe</span>
          <span>© 2023 - VoteMe. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
