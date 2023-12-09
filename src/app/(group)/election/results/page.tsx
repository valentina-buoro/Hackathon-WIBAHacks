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
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    values: [10, 20, 15, 25, 30],
  };
  const [results, setResults] = useState <any> (null);

  const [votingStatus, setVotingStatus] = useState(true);
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);
  const [electionName, setElectionName] = useState("");

  async function getElection() {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const results = await contractInstance.getResults(electionName);
    setResults(results);
    console.log(results);
  }

  return (
    <>
     

      <div className=" justify-between  p-8 lg:p-20 bg-[#F8F3F3]">
        <div>
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="link"
          >
            Input Election Name to View Results
          </label>
          <div className="flex justify-between mt-2 pl-4 lg:w-[440px] w-[320px] border border-[#D9D9D9] rounded-[10px] bg-[#FAFAFA] ">
            <input
              className="bg-inherit w-11/12 border-none outline-none"
              placeholder="Enter your code"
              id="link"
              name="link"
              value={electionName}
              onChange={(e) => {
                setElectionName(e.target.value);
              }}

            />
            <button
              className="rounded-[10px] text-[#F6F4F4] bg-[#001F3F] p-4"
              onClick={getElection}
            >
              Submit
            </button>
          </div>
        </div>
        {results && (
          <>
            <div className="mb-6 md:mb-8 lg:mb-10 text-left">
              <p className=" text-2xl md:3xl lg:text-4xl font-bold">
                Total Number of voters:
              </p>
              {results.map((student: any, index:any) => (
                <div key={index}>
                  <span>{parseInt(student._hex)}</span>
                </div>
              ))}
            </div>

            <div className="mx-auto w-[300px] md:w-[460px]  ">
              <div className="mb-4 md:mb-6">
                <BarChart data={chartData} />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;
