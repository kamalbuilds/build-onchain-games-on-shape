import React, { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi';
import { useAccount } from 'wagmi';

interface RewardMetadata {
  name: string
  description: string
  image: string
}

interface Props {
  contractAddress: string
}

export function RewardsDisplay({ contractAddress }: Props) {
  const { address } = useAccount()
  const [rewards, setRewards] = useState<RewardMetadata[]>([])

  const result = useContractRead<bigint[]>({
    address: contractAddress as `0x${string}`,
    abi: [
      {
        "inputs": [{"internalType": "address", "name": "player", "type": "address"}],
        "name": "getPlayerRewards",
        "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    functionName: 'getPlayerRewards',
    args: [address],
    watch: true
  })

  const playerRewards = result.data || []

  useEffect(() => {
    if (playerRewards.length > 0) {
      Promise.all(
        playerRewards.map(async (tokenId) => {
          const response = await fetch(`/api/rewards/${tokenId}`)
          const metadata: RewardMetadata = await response.json()
          return metadata
        })
      ).then(setRewards)
    }
  }, [playerRewards])

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {rewards.map((reward, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={reward.image} alt={reward.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{reward.name}</h2>
            <p>{reward.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 