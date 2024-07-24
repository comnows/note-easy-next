"use client";

import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../lib/types";
import { User } from "firebase/auth";
import { auth } from "../lib/firebase";

type AuthContextType = {
  currentUser: User | null;
};

export const AuthContext = createContext<AuthContextType>(null!);

function AuthContextProvider({ children }: ChildrenType) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
