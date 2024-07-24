import { useAuthContext } from "@/app/hook/UseAuthContext";
import { ChildrenType } from "@/app/lib/types";
import { redirect } from "next/navigation";

function ProtectedAuthRoute({ children }: ChildrenType) {
  const { currentUser } = useAuthContext();
  return currentUser ? redirect("/") : children;
}

export default ProtectedAuthRoute;
