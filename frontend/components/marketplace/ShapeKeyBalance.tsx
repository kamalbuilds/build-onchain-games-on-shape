// import { useContractRead } from 'wagmi';
// import { useAccount } from 'wagmi';
import styles from '../../styles/Marketplace.module.css';

const ShapeKeyBalance = () => {


  const balance = 0;
//   const { data: balance } = useContractRead({
//     address: process.env.NEXT_PUBLIC_SHAPE_KEY_ADDRESS,
//     abi: [
//       "function balanceOf(a6ddress owner) view returns (uint256)"
//     ],
//     functionName: 'balanceOf',
//     args: [address],
//     watch: true
//   });

  return (
    <div className={styles.shapeKeyBalance}>
      <span className={styles.keyIcon}>🔑</span>
      <span className={styles.balance}>{balance?.toString() || '0'} Shape Keys</span>
    </div>
  );
};

export default ShapeKeyBalance; 