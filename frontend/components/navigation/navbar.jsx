import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();
  const isLinkActive = (href) => router.pathname === href;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarRow}>
        <Link href="/" className={styles.title}>Decentralized Life </Link>
		<ConnectButton></ConnectButton>
      </div>
      <div className={styles.navbarRow}>
        <div className={styles.navbarMenu}>
		<Link href="/portfolio" className={`${styles.navbarItem} ${isLinkActive('/portfolio') ? styles.active : ''}`}>Portfolio</Link>
          <Link href="/swap" className={`${styles.navbarItem} ${isLinkActive('/swap') ? styles.active : ''}`}>Swap</Link>
          <Link href="/bridge" className={`${styles.navbarItem} ${isLinkActive('/bridge') ? styles.active : ''}`}>Bridge</Link>
        </div>
      </div>
    </nav>
  );
}
