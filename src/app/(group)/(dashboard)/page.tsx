"use client";
import React, {useState } from "react";
import { ethers } from "ethers";
import Navbar from "@/_components/navbar";
import Hero from "@/_components/hero";
import ElectionNews from "@/_components/electionNews";
import NewsLetter from "@/_components/newsLetter";
import Footer from "@/_components/footer";
import Faqs from "@/_components/faq";

const Page = () => {
  
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





  return (
<div>
  <Navbar connected={connected} connectToMetamask={connectToMetamask} />
  <Hero connected={connected} />
  <ElectionNews />
  <Faqs/>
  <NewsLetter/>
  <Footer/>
</div>

  );
};

export default Page;
