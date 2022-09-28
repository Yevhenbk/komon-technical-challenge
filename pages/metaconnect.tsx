import React, { useState } from "react";
import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";

declare global {
    interface Window {
      ethereum?: ExternalProvider | any;
    }
  }
  
const Metaconnect = () => {
  
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState<any>({
    address: "",
    Balance: "",
  });
  
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: any) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address: any) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance: any) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account: any) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };
  
  return (
    <div className="App">
      {/* Calling all values which we 
       have stored in usestate */}
  
      <div className="text-center">
        <div>
          <strong>Address: </strong>
          {data.address}
        </div>
        <div>
          <div>
            <strong>Balance: </strong>
            {data.Balance}
          </div>
          <button onClick={btnhandler} >
            Connect to wallet
          </button>
        </div>
      </div>
    </div>
  );
}
  
export default Metaconnect;