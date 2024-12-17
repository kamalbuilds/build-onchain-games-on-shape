import { useState } from 'react';
// import { useContractWrite } from 'wagmi';
import Image from 'next/image';
import styles from '../../styles/Marketplace.module.css';
import { ethers } from 'ethers';

interface GameCardProps {
  address: string;
  name: string;
  price: string;
  thumbnail: string;
}

const GameCard = ({ address, name, price, thumbnail }: GameCardProps) => {
  const [loading, setLoading] = useState(false);

  const purchaseGame = (amount: any) => {
  }
  //   const { write: purchaseGame } = useContractWrite({
//     address,
//     abi: ["function purchase() payable"],
//     functionName: 'purchase'
//   });

  const handlePurchase = async () => {
    try {
      setLoading(true);
      await purchaseGame({
        value: ethers.utils.parseEther(price)
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.gameCard}>
      <div className={styles.thumbnailContainer}>
        <Image 
          src={thumbnail} 
          alt={name}
          width={300}
          height={200}
          className={styles.thumbnail}
        />
      </div>
      
      <div className={styles.gameInfo}>
        <h3>{name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price} SHAPE</span>
          <button 
            onClick={handlePurchase}
            disabled={loading}
            className={styles.purchaseButton}
          >
            {loading ? 'Processing...' : 'Purchase with Shape Keys'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard; 