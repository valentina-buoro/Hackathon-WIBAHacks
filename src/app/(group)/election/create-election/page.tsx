"use client"
import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";
//import { Provider } from 'ethers';
import {contractAddress, contractAbi} from "../../../../_constants/constant";



const Page = (props:any) => {
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState('');
  const [connected, setConnected] = useState(false);

  async function connectToMetamask(){
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
    <div>
      <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Enter full name"
            id="full_name"
            name="full_name"
            value={''}
            onChange={()=>{}}
          />
          </div>
    </div>
  )
}

export default Page