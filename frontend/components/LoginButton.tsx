"use client";
import { useAuthModal } from "@account-kit/react";

export function LoginButton() {
  const { openAuthModal } = useAuthModal();

  function openLogin(){
    console.log("openLogin")
    openAuthModal()
  }
  return (
    <button
      onClick={() => { openLogin() }}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white 
        bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Connect Wallet
    </button>
  );
} 