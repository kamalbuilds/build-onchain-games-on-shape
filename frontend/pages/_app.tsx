import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Ethereum } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={Ethereum}
      supportedChains={[Ethereum]}
      supportedWallets={[
        metamaskWallet(),
        embeddedWallet(),
      ]}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
