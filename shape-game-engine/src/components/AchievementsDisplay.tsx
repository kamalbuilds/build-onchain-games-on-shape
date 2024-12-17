import React from 'react'
import { useAccount, useContractRead } from 'wagmi'

interface Props {
  contractAddress: string
}

export function AchievementsDisplay({ contractAddress }: Props) {
  const { address } = useAccount()

  const result = useContractRead<bigint>({
    address: contractAddress as `0x${string}`,
    abi: [
      {
        "inputs": [{"internalType": "address", "name": "player", "type": "address"}],
        "name": "getPlayerPoints",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    functionName: 'getPlayerPoints',
    args: [address],
    watch: true
  })

  const points = result.data || 0n

  return (
    <div className="p-4">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Points</div>
          <div className="stat-value">{points.toString()}</div>
        </div>
      </div>

      <div className="divider">Achievements</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Achievement cards would be rendered here */}
      </div>
    </div>
  )
} 