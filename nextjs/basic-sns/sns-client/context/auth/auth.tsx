import React, { createContext, useContext } from "react";
import useLocalStorage from "@/hooks/useLocalStrage";

interface AuthContextType {
  signIn: (token: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => {},
  signOut: () => {}
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const signIn = async (token: string) => {
    useLocalStorage("token", token);
  };

  const signOut = () => {
    useLocalStorage("token", "");
  };
  const value = {
    signIn,
    signOut
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
