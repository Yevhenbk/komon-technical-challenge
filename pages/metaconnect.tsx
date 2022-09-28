import * as React from "react";
import { NextPage } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";
import styles from "../styles/Metaconnect.module.scss"

/**
 * ! Define the Metaconnect page
 */

// Declare globals
declare global {
  interface Window {
    ethereum?: ExternalProvider | any;
  }
}
  
const Metaconnect: NextPage = () => {
  
  //* Define states 
  const [ balance, setBalance ] = React.useState<string>("");
  const [ address, setAddress ] = React.useState<string>("")
  
  //* Methods
  const buttonHandler = () => {
  
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
  
  // getBalance function for getting a balance in
  // a right format with help of ethers
  const getBalance = (address: string) => {
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance: string) => {
        setBalance(ethers.utils.formatEther(balance));
      });
  };
  
  const accountChangeHandler = (account: string) => {
    setAddress(account);
    getBalance(account);
  };
  
  //* View builder
  return (
    <div>
      <Layout title='Metaconnect | Technical chellenge Kommon' description='description' />
      <main className={styles.main}>
        <Header title="Meta" span="Connect" description="Press the button to connect your account to Metamask" />
        <div className={styles.column}>
          <div className={styles.wrapper}>
            <div className={styles.section}>
              <h2>Address: </h2>
              {address === "" ? <p className={styles.placeholder}>ex.a678f3f394209bad</p> : <p>{address}</p>}
            </div>
            <div className={styles.sectionTwo}>
              <h2>Balance: </h2>
              {balance === "" ? <p className={styles.placeholder}>0.0</p> : <p>{balance}</p>}
            </div>     
          </div>   
          <button onClick={buttonHandler} className={styles.button}>
            Connect to wallet
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
 
//* Export component
export default Metaconnect;