"use client"
import { useState, createContext } from "react";
import { ethers } from "ethers";
import Navbar from "@/_components/navbar"

export const PageContext = createContext(false);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
 
}) {
  
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
       <PageContext.Provider value={connected}>{children}</PageContext.Provider>
    </div>
  )
}
