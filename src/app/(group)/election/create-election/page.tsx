"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
//import { Provider } from 'ethers';
import { contractAddress, contractAbi } from "../../../../_constants/constant";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import { useRouter } from "next/navigation";

const Page = (props: any) => {
  const router = useRouter();
  const [votingStatus, setVotingStatus]= useState(true)
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);
  const [electionName, setElectionName] = useState('')
  const [candidate1, setCandidate1] = useState('')
  const [candidate2, setCandidate2] = useState('')
  const [candidate3, setCandidate3] = useState('')

  async function createElection() {


    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress, contractAbi, signer
    )
    const status = await contractInstance.createElection(electionName, [candidate1, candidate2, candidate3])
    if(status){
      router.push("/election/results");
    }
    console.log(status)
    setVotingStatus(status)
  }

  return (
    <>
    <Navbar connected={connected} />
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
              value={electionName}
              onChange={(e) => {setElectionName(e.target.value)}}
            />
          </div>
        </div>
        <div  className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Candidate 1
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
            <input
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Enter Candidate Name"
              id="title"
              name="title"
              value={candidate1}
              onChange={(e) => {setCandidate1(e.target.value)}}
            />
          </div>
        </div>
        <div  className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Candidate 2
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
            <input
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Enter Candidate Name"
              id="title"
              name="title"
              value={candidate2}
              onChange={(e) => {setCandidate2(e.target.value)}}
            />
          </div>
        </div>
        <div  className="mb-4 md:mb-6">
          <label
            className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
            htmlFor="title"
          >
            Candidate 3
          </label>
          <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
            <input
              className="bg-inherit w-full border-none outline-none placeholder:text-sm"
              placeholder="Enter Candidate Name"
              id="title"
              name="title"
              value={candidate3}
              onChange={(e) => {setCandidate3(e.target.value)}}
            />
          </div>
        </div>
        
       {/* <div  className="mb-4 md:mb-6">
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
  </div>*/}
        <button className="rounded-[10px] text-[#F6F4F4] bg-[#001F3F] w-full  py-3 md:py-4  " onClick={createElection}>
         
      Create Election
        </button>
      </div>
    </div>
    <Footer/></>
  );
};

export default Page;
