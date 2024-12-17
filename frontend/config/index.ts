import { AlchemyAccountConfig } from "@account-kit/core";

export const config: AlchemyAccountConfig = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!,
  chain: {
    id: 11155111, // Sepolia testnet
  },
  debug: true,
}; 