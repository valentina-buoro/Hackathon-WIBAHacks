import React from "react";
import Hands from "../../public/hands.png";
import Image from "next/image";
import News from "../../public/newsletter.svg";
import Link from "next/link";
import { NavbarProps } from "@/app/types";

const NewsLetter = () => {
  return (
    <div className=" mx-auto  px-8 lg:px-20" id="section3">
      <div className="grid grid-cols-1 lg:grid-cols-3  ">
        <div className="col-span-1 lg:col-span-2 bg-[#888888]">
          <div className="pt-6 lg:pt-[81px] lg:pb-[96px] lg:pl-[50px]">
            <div className="mb-3 md:mb-6">
              <p className="mb-2 md:mb-4 font-bold text-2xl md:text-[32px] p-6">Subscribe to Our Newsletter</p>
              <p className="text-[#666666] mx-4 text-normal md:text-lg lg:text-2xl">Receive latest news and updates daily</p>
            </div>
            <div className="flex justify-between m-4 p-4 lg:w-[440px] w-[280px]  rounded-[10px] bg-[#FAFAFA] ">
              <input
                className="bg-inherit w-11/12 border-none outline-none"
                placeholder="Enter your email address"
                id="full_name"
                name="full_name"
                value={""}
                onChange={() => {}}
              />
            <span className="bg-[#008000]">
            <Image src={News} alt="bars" width={24} height={24} />
            </span>
            </div>
           
          </div>
        </div>
        <div className=" col-span-1 bg-[#455A64] ">
         
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
