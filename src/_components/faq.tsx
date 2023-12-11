"use client";
import React, { useState } from "react";
import Faq from "../../public/faq.png";
import DropdownOpen from "../../public/dropdownOpen.svg";
import Image from "next/image";

const Data = [
  {
    question:
      "What security measures are in place to ensure the integrity of my vote?",
    answer:
      "All voting transactions are encrypted, protecting the confidentiality and integrity of your vote and we also utilize secure network protocols to safeguard data transmission, reducing the risk of unauthorized access.",
  },
  {
    question: "Can I verify that my vote has been counted correctly?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    question: "Is there a way to practice voting before the actual election?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },

  {
    question: "Can I change my vote once it's submitted?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    question: "How are votes counted and results announced?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    question: "What happens in the case of a technical failure or outage?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/closed state of a FAQ
  const toggleFaq = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className=" mx-auto py-16 px-8 lg:px-20 lg:py-40" id="section4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 my-5">
        <div className=" col-span-1 flex items-center justify-center">
          <div className="h-5/6 w-[265px] lg:w-[524px]">
            <Image
              src={Faq}
              alt="hands"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-16">
            <p className="font-bold text-2xl md:text-[32px] mb-4">Frequently Asked Question</p>
            <p className="text-[#4E4A4B] text-normal md:text-lg lg:text-2xl">Questions you might ask about our service</p>
          </div>
          <div className="space-y-5 pt-6">
            {Data.map((faq, index) => (
              <div key={index} className="relative mt-4">
                <button
                  key={index}
                  className="w-full flex justify-between text-left px-4 py-2 rounded-md bg-white border-none focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-2xl">{faq.question}</span>
                  <Image
                    className="h-[1rem] w-[1rem] md:w-[1.5rem] md:h-[1.5rem]  fill-current"
                    src={DropdownOpen}
                    alt="expand"
                  />
                  {/*<svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                 <path d="M6 6l8 8 8-8z"></path>
             </svg>*/}
                </button>
                {openIndex === index && (
                  <div className="absolute w-full mt-2 py-2 bg-white rounded-md shadow-xl z-10">
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {faq.answer}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </div>
  );
};

export default Faqs;
