import { create } from "zustand";

type AuthUser = {
  name?: string | undefined;
  email?: string | undefined;
  token: string | undefined;
};
type State = {
  authUser: AuthUser;
  signIn: (payload: AuthUser) => void;
  signOut: () => void;
};
const useAuthStore = create<State>((set) => ({
  authUser: { name: "", email: "", token: "" },
  signIn: async (payload) => {
    set({
      authUser: payload
    });
    localStorage.setItem("token", payload.token ?? "");
  },
  signOut: () => {
    set({ authUser: { name: "", email: "", token: "" } });
    localStorage.removeItem("token");
  }
}));
export default useAuthStore;
