"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Register from "../../../../../public/registerVote.png";
import Link from "next/link";
import { LoginProps } from "@/app/types";
//import useSignup from '../../../_hooks/useSignup'
import { useRouter } from "next/navigation";
import Footer from "@/_components/footer";
import Navbar from "@/_components/navbar";

const Index = () => {
  const router = useRouter();
  const initialState: LoginProps = {
    email: "",

    password: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = async () => {};

  return (
    <>
    <Navbar/>
      <div className="flex flex-col lg:flex-row justify-between h-screen p-8 lg:px-20 bg-[#F8F3F3]">
        <div className=" flex flex-col items-center justify-center space-y-10 lg:space-y-40 lg:h-screen lg:w-2/5">
          <div className="flex flex-col items-center justify-center gap-y-10 lg:w-[440px] w-[320px]">
            <p className=" text-2xl md:3xl lg:text-4xl font-bold">Register</p>
            <button className="rounded-[10px]  text-[#F6F4F4] bg-[#001F3F] lg:py-4 py-3 lg:w-[440px] w-[320px]">
              Connect with your metamask wallet
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-10">
            <div>
              <p>Input generated code sent to you to cast your vote</p>
            </div>
            <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-sm ">
              <input
                className="bg-inherit w-11/12 border-none outline-none"
                placeholder="Enter your code"
                id="full_name"
                name="full_name"
                value={""}
                onChange={() => {}}
              />
            </div>
            <button className="rounded-[10px] text-[#F6F4F4] bg-[#001F3F] lg:py-4  lg:px-48 py-3 px-36">
              {" "}
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:h-screen mx-auto lg:w-3/5">
          <div className="lg:w-[800px] lg:h-[700px] w-[200px] h-[200px]">
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
