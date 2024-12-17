"use client";
import { useSmartAccount } from "@/contexts/SmartAccountContext";
import { useState } from "react";
import { encodeFunctionData, parseAbi } from "viem";
import MintCard from "./MintCard";

export type MintableItem = {
  name: string;
  description: string;
  image: any;
};

// Define your mintable items similar to nomad-multiverse
export const MINTABLE_ITEMS = {
  SHAPE_EYE: {
    name: "Shape Eye",
    description: "A mystical eye that sees through shapes",
    image: "/images/eye.png" // Add your eye image
  },
  SHAPE_KEY: {
    name: "Shape Key", 
    description: "A key to unlock shape transformations",
    image: "/images/key.gif" // Add your key gif
  }
};

export function MintSection() {
  const { client } = useSmartAccount();
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleMint = async (itemType: keyof typeof MINTABLE_ITEMS) => {
    // Add your minting logic here similar to nomad-multiverse
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(MINTABLE_ITEMS).map(([itemType, item]) => (
        <MintCard
          key={itemType}
          item={item}
          isLoading={isLoading === itemType}
          onMint={() => handleMint(itemType as keyof typeof MINTABLE_ITEMS)}
        />
      ))}
    </div>
  );
} 