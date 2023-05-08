import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a className={styles.title}>Decentralized Life</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
