import { useState } from "react";
import styles from "../styles/Home.module.css";


export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  return (
    <div>
      <main className={styles.main}>
      
      </main>
    </div>
  );
}
