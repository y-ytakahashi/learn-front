import { create } from "zustand";
import apiClient from "@/lib/apiClient";

type AuthUser = {
  sub: string | undefined;
  username: string | undefined;
  token: string | undefined;
};
type State = {
  authUser: AuthUser;
  signIn: (payload: AuthUser) => void;
  signOut: () => void;
};
const useAuthStore = create<State>((set) => ({
  authUser: { sub: "", username: "", token: "" },
  signIn: async (payload) => {
    set({
      authUser: payload
    });
    localStorage.setItem("token", payload.token ?? "");
  },
  signOut: () => {
    set({ authUser: { sub: "", username: "", token: "" } });
    localStorage.removeItem("token");
    delete apiClient.defaults.headers["Authorization"];
  }
}));
export default useAuthStore;
