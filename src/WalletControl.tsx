import '@rainbow-me/rainbowkit/styles.css';
import { useAccount } from 'wagmi';
import './App.css';
import { UploadModel } from './components/UploadModel';
import { Wallet } from './components/wallet';

function WalletControl () {
  const { isConnected } = useAccount();

   // let the user upload model when his wallet is connected.
  return (
    <>
      <div className='w-100 text-center standard-background px-2 py-2 mb-1'>
        <Wallet />
      </div>
      {isConnected && <UploadModel />}
    </>
  )
}
export default WalletControl

