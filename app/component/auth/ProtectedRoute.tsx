import { useAuthContext } from "@/app/hook/UseAuthContext";
import { ChildrenType } from "@/app/lib/types";
import { redirect } from "next/navigation";

function ProtectedRoute({ children }: ChildrenType) {
  const { currentUser } = useAuthContext();
  return currentUser ? children : redirect("/login");
}

export default ProtectedRoute;
