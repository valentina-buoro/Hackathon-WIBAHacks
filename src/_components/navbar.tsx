import Link from "next/link";
import React from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import { NavbarProps } from "@/app/types";

const Navbar = ({ connected, connectToMetamask }: NavbarProps) => {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16 pl-8  pr-4 lg:pl-20  lg:pr-10 shadow-md">
        <Link href="/">
          {" "}
          <span className="text-[#3366CC] font-black flex md:text-[28.777px] md:leading-[ 25.899px] items-center justify-center cursor-pointer ">
            <span className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center">
              <Image src={Logo} alt="logo" />{" "}
            </span>
            <span>TrustBallot</span>
          </span>
        </Link>
        <div className="hidden md:flex space-x-10">
          <Link
            href="/"
            className="text-sm font-medium leading-5 active:font-black"
          >
            Home
          </Link>
          <span className="font-medium leading-5 active:font-black hover:font-black  cursor-pointer">
            <a onClick={() => scrollToSection("section1")}> Ongoing Election</a>
          </span>
          <span className="font-medium leading-5 active:font-black hover:font-black  cursor-pointer">
            <a onClick={() => scrollToSection("section2")}>Election News</a>
          </span>
          <span className="font-medium leading-5 hover:font-black  active:font-black">
            <a onClick={() => scrollToSection("section3")}> Contact Us</a>
          </span>
          <span className="font-medium leading-5hover:font-black  active:font-black">
            <a onClick={() => scrollToSection("section4")}> FAQ</a>
          </span>
        </div>
        <div>
          <div className="flex gap-4">
            <button
              className="py-1 px-3 lg:py-3 lg:px-[25px]   bg-[#008000] text-[#FAFAFA] rounded-lg md:rounded-xl text-[14px] shadow-md shadow-[#2E2F35]"
              onClick={connectToMetamask}
            >
              {connected ? "Connected" : "Get Started"}
            </button>
            {connected && (
              <button className="py-1 px-3 lg:py-3 lg:px-[25px]   border-[#008000] text-[#008000] rounded-lg md:rounded-xl text-[14px] shadow-md shadow-[#2E2F35]">
                <Link href="/election/results">View Election Results</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
