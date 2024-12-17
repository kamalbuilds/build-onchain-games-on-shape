import { useSmartAccount } from "@/contexts/SmartAccountContext";
import { LoginButton } from "./LoginButton";

export function Navigation() {
  const { address } = useSmartAccount();

  return (
    <nav>
      {/* ... other navigation items ... */}
      {!address ? (
        <LoginButton />
      ) : (
        <div className="text-sm text-gray-700">
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
      )}
    </nav>
  );
} 