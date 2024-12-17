
import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Ethereum } from "@thirdweb-dev/chains";
import { Providers } from "../providers";
import { config } from "@/config";
function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <Providers>
          <Navbar />
          <Component {...pageProps} />
      </Providers>
  );
}

export default MyApp;
