import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./App.tsx"

// Bootstrap & Bootstrap Icons
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css'
import { WagmiConfig, createConfig } from 'wagmi'
import { RainbowKitProvider, connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { chains, publicClient, webSocketPublicClient } from './config/wallet.ts'
import '@rainbow-me/rainbowkit/styles.css'

const projectId = '7fc8602bd859749134adeca848bb82d5';

const { wallets } = getDefaultWallets({
  projectId,
  appName: 'shape-game-dev',
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  webSocketPublicClient,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
