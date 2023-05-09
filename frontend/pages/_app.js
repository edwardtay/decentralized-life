import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import TokensBalanceDisplay from "../components/tokensBalanceDisplay";
import TransactionsHistoryDisplay from "../components/transactionsHistoryDisplay";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import {
	mainnet,
	arbitrum,
	bsc,
	gnosis,
	goerli,
	optimism,
	polygon,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";


const { chains, provider } = configureChains(
	[
		mainnet,
		arbitrum,
		bsc,
		gnosis,
		goerli,
		optimism,
		polygon,
	],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: "My Alchemy DApp",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const account = useAccount({
		onConnect({ address, connector, isReconnected }) {
			if (!isReconnected) router.reload();
		},
	});
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				modalSize="compact"
				initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
				chains={chains}
			>
				<MainLayout>
				<Component {...pageProps} />
					<TokensBalanceDisplay walletAddress={account?.address} chain={"ETH_MAINNET"} /> 
				
					<TransactionsHistoryDisplay walletAddress={account?.address} />
					
					</MainLayout>
			</RainbowKitProvider>
		</WagmiConfig>
		
	);	

}

export default MyApp;
