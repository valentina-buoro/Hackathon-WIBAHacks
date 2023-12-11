"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Register from "../../../../../public/registerVote.png";
import { contractAbi, contractAddress } from "@/_constants/constant";
import { LoginProps } from "@/app/types";
import { useRouter } from "next/navigation";
import Footer from "@/_components/footer";
import Navbar from "@/_components/navbar";

import { ethers } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const router = useRouter();
  const [votingStatus, setVotingStatus] = useState(true);
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);
  const [electionName, setElectionName] = useState("");
  const [candidate, setCandidate] = useState("");
  const [list, setList] = useState<any>([]);

  async function vote() {
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
    try{
      const status = await contractInstance.castVote(electionName, candidate);
    if (status) {
      toast.success("Voted successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/election/results");
    }
    setVotingStatus(status);
    }catch (err:any) {
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
  }
  async function getCandidates() {
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
    try{
      const status = await contractInstance.getCandidates(electionName);
    console.log(status);
    setList(status);
    } catch (err:any) {
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
  }
  

  return (
    <>
    <Navbar connected/>
      <div className="flex flex-col lg:flex-row justify-between h-screen p-8 lg:px-20 bg-[#F8F3F3]">
        <div className=" flex flex-col items-center justify-center space-y-10 lg:space-y-40 lg:h-screen lg:w-2/5">
          <div className="flex flex-col  justify-center gap-y-10">
            <div>
              <p>Input Election Name</p>
            </div>
            <div className="flex justify-between pl-4 lg:w-[440px] w-[320px] border border-[#D9D9D9] rounded-[10px] bg-[#FAFAFA] ">
              <input
                className="bg-inherit w-11/12 border-none outline-none"
                placeholder="Enter your code"
                id="full_name"
                name="full_name"
                value={electionName}
                onChange={(e) => {
                  setElectionName(e.target.value);
                }}
              />
               <div className="bg-[#001F3F] p-4">
               <button  className="rounded-[10px] text-[#F6F4F4] bg-[#001F3F] h-full"
              onClick={getCandidates}>
                Submit
              </button>
               </div>
             
            </div>
         
               
              
            {list.length > 0 && (
              <div>
                <p>Input Choice Candidate Number</p>
                <table>
                  <tr >
                    <th className="py-2 px-4 border-b">Candidate Name</th>
                    <th className="py-2 px-4 border-b">Candidate Number</th>
                  </tr>
                </table>
                {list.map((name: string, index: any) => (
                  <tr key={index} className="flex justify-around py-2 px-4 border-b " >
                    <td className="py-2 px-4 border-b">{name}</td>
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                  </tr>
                ))}
             
            

            <div className="flex justify-between p-4 lg:w-[440px] w-[320px] border border-[#D9D9D9] rounded-[10px] bg-[#FAFAFA] ">
              <input
                className="bg-inherit w-11/12 border-none outline-none"
                placeholder="Enter your code"
                id="full_name"
                name="full_name"
                value={candidate}
                onChange={(e) => {
                  setCandidate(e.target.value);
                }}
              />
            </div>
            <button
              className="rounded-[10px] text-[#F6F4F4] bg-[#001F3F] lg:py-4  lg:px-48 py-3 px-36"
              onClick={vote}
            >
              {" "}
              Submit
            </button> </div>)}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:h-screen mx-auto lg:w-3/5">
          <div className="lg:w-[600px] lg:h-[700px] w-[200px] h-[200px]">
            <Image src={Register} alt="WIBA TEAM 4" className="h-full w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

/*const Page = (props:any) => {
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState('');
  const [connected, setConnected] = useState(false);

  async function connectToMetamask(){
    if (window.ethereum) {
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
    }
      
  }
  

  return (
    <div>
      <h1>Welcome to decentralized voting</h1>
      <button onClick={connectToMetamask}>Click me</button>
    </div>
  )
}

export default Page*/
