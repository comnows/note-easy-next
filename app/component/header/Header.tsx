import { useAuthContext } from "@/app/hook/UseAuthContext";
import { auth } from "@/app/lib/firebase";
import { signOut } from "firebase/auth";

function Header() {
  const { currentUser } = useAuthContext();
  const handleLogout = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    await signOut(auth);
  };

  return (
    <header className="flex justify-between gap-4 bg-white rounded-full px-20 py-3">
      <p className="text-lg font-semibold">{currentUser?.displayName}</p>
      <button onClick={handleLogout} className="text-red-600 text-base">
        Logout
      </button>
    </header>
  );
}

export default Header;
