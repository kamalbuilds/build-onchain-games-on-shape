declare module 'wagmi' {
  export interface Account {
    address: string
    isConnected: boolean
  }

  export interface UseContractReadConfig {
    address: string
    abi: any[]
    functionName: string
    args: any[]
    watch?: boolean
  }

  export interface UseContractReadResult<T> {
    data?: T
    isError: boolean
    isLoading: boolean
  }

  export function useAccount(): Account
  export function useContractRead<T>(config: UseContractReadConfig): UseContractReadResult<T>
  export function WagmiConfig(props: { config: any; children: React.ReactNode }): JSX.Element
  export function createConfig(config: any): any
}

declare module '@rainbow-me/rainbowkit' {
  export function RainbowKitProvider(props: { chains: any[]; children: React.ReactNode }): JSX.Element
  export function connectorsForWallets(config: any): any
  export function getDefaultWallets(config: any): any
} 