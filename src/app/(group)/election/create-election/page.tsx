"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
//import { Provider } from 'ethers';
import { contractAddress, contractAbi } from "../../../../_constants/constant";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";

const Page = (props: any) => {
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);

  async function connectToMetamask() {
    /*if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setConnected(true);
      } 
      catch (error) {
        console.log(error);
      }
    } else{
      alert("Please install metamask");
    }*/
  }

  return (
    /*<div>
      <h1>Welcome to decentralized voting</h1>
      <button onClick={connectToMetamask}>Click me</button>
    </div>*/
    <>
    <Navbar/>
    <div className=" justify-between  p-8 lg:p-20 bg-[#F8F3F3]">
      <div className="mx-auto w-[300px] md:w-[460px]  ">
        <div className="mb-6 md:mb-8 lg:mb-10 text-center">
          <p className=" text-2xl md:3xl lg:text-4xl font-bold">Create Vote</p>
        </div>
        <div className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Voting Title
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
            <input
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Enter your title"
              id="title"
              name="title"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <div  className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Voting Type
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
            <input
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Indicate if it is multiple choice or others"
              id="title"
              name="title"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <div  className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Voting Questions
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full h-[120px] rounded-lg border border-[#666666] ">
            <textarea
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Enter your questions"
              id="title"
              name="title"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <div  className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Voting Starts
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
            <input
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Enter your date and time"
              id="title"
              name="title"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <div  className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Voting Ends
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
            <input
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Enter your date and time"
              id="title"
              name="title"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <button className="rounded-[10px] text-[#F6F4F4] bg-[#001F3F] w-full  py-3 md:py-4  ">
         
         Generate Code
        </button>
      </div>
    </div>
    <Footer/></>
  );
};

export default Page;
