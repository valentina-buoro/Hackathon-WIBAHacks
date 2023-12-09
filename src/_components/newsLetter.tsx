import React from "react";
import Hands from "../../public/hands.png";
import Image from "next/image";
import Bars from "../../public/bars.png";
import Link from "next/link";
import { NavbarProps } from "@/app/types";

const NewsLetter = ({ connected }: NavbarProps) => {
  return (
    <div className="bg-[red] mx-auto py-16 px-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        <div className="col-span-1 lg:col-span-2 bg-">
          <div>
            <div>
              <p>Subscribe to Our Newsletter</p>
              <p>Receive latest news and updates daily</p>
            </div>
           
          </div>
        </div>
        <div className="hidden lg:col-span-1 lg:bg-[#455A64]">
         
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
