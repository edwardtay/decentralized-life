import { useState } from "react";
import styles from "../styles/Home.module.css";
import TokensBalanceDisplay from "../components/tokensBalanceDisplay";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  return (
    <div>
      <main className={styles.main}>
        <input
          type="text"
          placeholder="Enter wallet address"
          value={walletAddress}
          onChange={handleWalletAddressChange}
          className={styles.inputBox}
        />
        <TokensBalanceDisplay walletAddress={walletAddress} chain={"ETH_MAINNET"} />
      </main>
    </div>
  );
}
