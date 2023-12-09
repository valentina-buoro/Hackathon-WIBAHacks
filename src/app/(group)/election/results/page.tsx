"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
//import { Provider } from 'ethers';
import { contractAddress, contractAbi } from "../../../../_constants/constant";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import BarChart from "@/_components/BarChart";


const Page = (props: any) => {
    const chartData = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        values: [10, 20, 15, 25, 30],
      };
    

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
    <>
      <Navbar />
      <div className=" justify-between  p-8 lg:p-20 bg-[#F8F3F3]">
        <div className="mb-6 md:mb-8 lg:mb-10 text-left">
          <p className=" text-2xl md:3xl lg:text-4xl font-bold">Total Number of voters: 255</p>
        </div>

        <div className="mx-auto w-[300px] md:w-[460px]  ">
          <div className="mb-4 md:mb-6">
          <BarChart data={chartData} />
          </div>
         
        </div>
        <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="link"
          >Copy code to send to voters
          </label>
        <div className="flex justify-between mt-2 p-4 lg:w-[440px] w-[320px] border border-[#D9D9D9] rounded-[10px] bg-[#FAFAFA] ">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Enter your code"
            id="link"
            name="link"
            value={""}
            onChange={() => {}}
            disabled
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
