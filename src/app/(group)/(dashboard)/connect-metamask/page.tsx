"use client"
import React , {useState} from "react";
import Image from "next/image";
import axios from "axios";
import Register from '../../../../../public/registerVote.png'
import Link from "next/link";
import { LoginProps } from "@/app/types";
//import useSignup from '../../../_hooks/useSignup'
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const initialState: LoginProps = {
    email: "",
   
    password: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = async () => {
    
  };

 
  return (
    <div className="flex">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen lg:w-2/5 lg:bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="flex justify-center items-center h-1/2">
          <h1 className="text-white text-3xl font-bold">WIBA TEAM 4</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-6 mx-auto lg:w-3/5">
        
       <div>
       <Image src={Register} alt="WIBA TEAM 4" className="rounded-full" />
       </div>
        
      </div>
    </div>
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