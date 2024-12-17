import { useEffect, useState } from 'react';
// import { useContract, useContractRead } from 'wagmi';
import { ethers } from 'ethers';
import GameCard from '../../components/marketplace/GameCard';
import ShapeKeyBalance from '../../components/marketplace/ShapeKeyBalance';
import styles from '../../styles/Marketplace.module.css';

const Marketplace = () => {
//   const [games, setGames] = useState([]);
  
  // Connect to ShapeGameFactory contract
//   const { data: gamesList } = useContractRead({
//     address: process.env.NEXT_PUBLIC_FACTORY_ADDRESS || "0x123445",
//     abi: [
//       "function getAllGames() view returns (tuple(address addr, string name, uint256 price, string thumbnail)[])"
//     ],
//     functionName: 'getAllGames',
//     watch: true
//   });

  // Temporary dummy data for development
  const dummyGamesList = [
    {
      addr: "0x1234567890123456789012345678901234567890",
      name: "Space Adventure",
      price: ethers.utils.parseEther("0.1"),
      thumbnail: "https://imgs.search.brave.com/8wYvLr3bvkVM8JuUqSQWbijFIXntGQaz5ytTwf78CRA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y29zbWljLWJhY2tn/cm91bmQtYWxpZW4t/cGxhbmV0LWRlc2Vy/dGVkLWxhbmRzY2Fw/ZV8xMDc3OTEtMTMw/NzQuanBn"
    },
    {
      addr: "0x2345678901234567890123456789012345678901",
      name: "Puzzle Master",
      price: ethers.utils.parseEther("0.05"),
      thumbnail: "https://m.media-amazon.com/images/I/81j6BM44-iL.jpg"
    },
    {
      addr: "0x3456789012345678901234567890123456789012", 
      name: "Action Heroes",
      price: ethers.utils.parseEther("0.15"),
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN6zDBHq_yBfXWm3w-A8oVWGVY-EE152f9w&s"
    },
    {
      addr: "0x4567890123456789012345678901234567890123",
      name: "Mystery Quest",
      price: ethers.utils.parseEther("0.08"),
      thumbnail: "https://picsum.photos/300/200"
    }
  ];

  const games = dummyGamesList;


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Shape Games Marketplace</h1>
        <ShapeKeyBalance />
      </div>

      <div className={styles.filters}>
        <select className={styles.filterSelect}>
          <option value="all">All Games</option>
          <option value="action">Action</option>
          <option value="puzzle">Puzzle</option>
          <option value="adventure">Adventure</option>
        </select>

        <select className={styles.filterSelect}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className={styles.gamesGrid}>
        {games.map((game, index) => (
          <GameCard 
            key={index}
            address={game.addr}
            name={game.name}
            price={ethers.utils.formatEther(game.price)}
            thumbnail={game.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketplace; 