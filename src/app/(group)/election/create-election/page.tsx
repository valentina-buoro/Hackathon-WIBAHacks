"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
//import { Provider } from 'ethers';
import { contractAddress, contractAbi } from "../../../../_constants/constant";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = (props: any) => {
  const [inputTime, setInputTime] = useState("");
  const [unixTimestamp, setUnixTimestamp] = useState<number | null>(null);
  const [inputTime2, setInputTime2] = useState("");
  const [unixTimestamp2, setUnixTimestamp2] = useState<number | null>(null);

  const handleInputChange = (event: any) => {
    setInputTime(event.target.value);
  };
  const router = useRouter();
  const [votingStatus, setVotingStatus] = useState(true);
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);
  const [electionName, setElectionName] = useState("");
  const [candidate1, setCandidate1] = useState("");
  const [candidate2, setCandidate2] = useState("");
  const [candidate3, setCandidate3] = useState("");

  async function createElection() {
    const inputDate = new Date(inputTime);
    let timestamp;
    if (!isNaN(inputDate.getTime())) {
      timestamp = Math.floor(inputDate.getTime() / 1000); // Convert to seconds
      setUnixTimestamp(timestamp);
      console.log("timestamp1", timestamp);
    }
    const inputDate2 = new Date(inputTime2);

    // Check if the input is a valid date
    let timestamp2;
    if (!isNaN(inputDate.getTime())) {
      timestamp2 = Math.floor(inputDate2.getTime() / 1000); // Convert to seconds
      setUnixTimestamp2(timestamp2);
      console.log("timestamp2", timestamp2);
    }

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
    try {
      const status = await contractInstance.createElection(
        electionName,
        [candidate1, candidate2, candidate3],
        timestamp,
        timestamp2
      );

      if (status) {
        toast.success("Election created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      } else {
        toast.error("Election creation failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      console.log(status);
      setVotingStatus(status);
    } catch (err: any) {
      console.log(err.reason);
      toast.error(err.reason, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    console.log(unixTimestamp, unixTimestamp2);
  }

  /*const convertToUnixTimestamp = () => {
    const inputDate = new Date(inputTime);

    // Check if the input is a valid date
    if (!isNaN(inputDate.getTime())) {
      const timestamp = Math.floor(inputDate.getTime() / 1000); // Convert to seconds
      setUnixTimestamp(timestamp);
      console.log("timestamp1", timestamp);
    } else {
      // Handle invalid date input
      setUnixTimestamp(null);
    }
  };

  const convertToUnixTimestamp2 = () => {
    const inputDate = new Date(inputTime2);

    // Check if the input is a valid date
    if (!isNaN(inputDate.getTime())) {
      const timestamp2 = Math.floor(inputDate.getTime() / 1000); // Convert to seconds
      setUnixTimestamp2(timestamp2);
      console.log("timestamp2", timestamp2);
    } else {
      // Handle invalid date input
      setUnixTimestamp2(null);
    }
  };
*/
  return (
    <>
      <Navbar connected  />

      <div className=" justify-between  p-8 lg:p-20 bg-[#F8F3F3]">
        <div className="mx-auto w-[300px] md:w-[460px]  ">
          <div className="mb-6 md:mb-8 lg:mb-10 text-center">
            <p className=" text-2xl md:3xl lg:text-4xl font-bold">
              Create Election
            </p>
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
                onChange={(e) => {
                  setElectionName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-4 md:mb-6">
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
                onChange={(e) => {
                  setCandidate1(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-4 md:mb-6">
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
                onChange={(e) => {
                  setCandidate2(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-4 md:mb-6">
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
                onChange={(e) => {
                  setCandidate3(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <label
              className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
              htmlFor="title"
            >
              Voting Starts
            </label>
            <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
              <input
                type="datetime-local"
                className="bg-inherit w-full border-none outline-none placeholder:text-sm"
                placeholder="Enter your date and time"
                id="title"
                name="title"
                value={inputTime}
                onChange={(e) => {
                  setInputTime(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-4 md:mb-6">
            <label
              className="font-medium text-base md:text-[18px] text-[#0D0D0D] mb-2"
              htmlFor="title"
            >
              Voting Ends
            </label>
            <div className="flex justify-between p-2 md:p-4 w-full rounded-lg border border-[#666666] ">
              <input
                type="datetime-local"
                className="bg-inherit w-full border-none outline-none placeholder:text-sm"
                placeholder="Enter your date and time"
                id="title"
                name="title"
                value={inputTime2}
                onChange={(e) => {
                  setInputTime2(e.target.value);
                }}
              />
            </div>
           
          </div>
          <button
            className="rounded-[10px] text-[#F6F4F4] bg-[#36C] w-full  py-3 md:py-4  "
            onClick={createElection}
          >
            Create Election
          </button>
        </div>
      </div>
     <ToastContainer/>
      <Footer />
    </>
  );
};

export default Page;
