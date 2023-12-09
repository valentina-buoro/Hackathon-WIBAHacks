import React, { useState } from "react";
import { aboutFaqProps } from "@/app/types";
import DropdownOpen from '../../../public/dropdownOpen.svg'

const Index = ({ question, answer }: aboutFaqProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  className={`mb-5 cursor-pointer ${isOpen && "transition-all ease-in-out delay-200"}`}>
      <div
        className=" p-6 rounded-2xl text-text bg-hover"
        onClick={toggleDropdown}
      >
        <div className="flex justify-between w-full">
          <p className="lg:text-lg text-base">{question}</p>
          <span className={isOpen ? "transform rotate-180" : ""}>
            <DropdownOpen size={24} />
          </span>
        </div>
        {isOpen && (
          <div className="py-2">
            <p className="text-sm text-dark text-justify leading-7">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;