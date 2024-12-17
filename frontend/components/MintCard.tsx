"use client";
import Image from "next/image";
import { MintableItem } from "./MintSection";

export default function MintCard({
  item,
  isLoading,
  onMint,
}: {
  item: MintableItem;
  isLoading: boolean;
  onMint: () => Promise<void>;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src={item.image}
          alt={item.name}
          width={192}
          height={192}
          className="w-48 h-48 object-contain"
        />
        <div className="text-center">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
        <button
          onClick={onMint}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md
            hover:bg-blue-700 transition-colors duration-200
            disabled:bg-blue-300 flex items-center justify-center"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Minting...
            </span>
          ) : (
            "Mint Item"
          )}
        </button>
      </div>
    </div>
  );
} 