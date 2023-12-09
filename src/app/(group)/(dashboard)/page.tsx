"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { contractAddress, contractAbi } from "../../../_constants/constant";
import Navbar from "@/_components/navbar";
import Hero from "@/_components/hero";
import ElectionNews from "@/_components/electionNews";
import NewsLetter from "@/_components/newsLetter";
import Footer from "@/_components/footer";
import Faqs from "@/_components/faq";

const Page = () => {
  const [user, setUser] = useState({
    email: "",
    message: "",
    full_name: "",
  });
  
  const [votingStatus, setVotingStatus]= useState(true)
  const [remainingTime, setremainingTime] = useState(0)
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);

  async function connectToMetamask() {
    if ((window as any).ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setConnected(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install metamask");
    }
  }
  /*useEffect(() => {
    getCandidates()
    getRemainingTime()
    getCurrentStatus()
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  });

  async function getCandidates() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress, contractAbi, signer
    )
    const candidatesList = await contractInstance.getAllVotesOfCandidates();
    console.log(candidatesList)
  }
  

  async function getCurrentStatus() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress, contractAbi, signer
    )
    const status = await contractInstance.createElection("Election1", ["Choice A", "Choice B", "Choice C"])
    console.log(status)
    setVotingStatus(status)
  }

  async function getRemainingTime(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress, contractAbi, signer
    )
    const time = await contractInstance.getRemainingTime()
    setremainingTime(parseInt(time,16))
  }

  function handleAccountsChanged(accounts: any) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
    } else {
      setConnected(false);
      setAccount("s");
    }
  }

  async function connectToMetamask() {
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
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install metamask");
    }
  }*/

  return (
<div>
  <Navbar connected={connected} connectToMetamask={connectToMetamask} />
  <Hero connected={connected} />
  <ElectionNews/>
  
  <Faqs/>
  <NewsLetter/>
  <Footer/>

</div>

  );
};

export default Page;
