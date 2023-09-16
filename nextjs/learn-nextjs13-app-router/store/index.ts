import create from "zustand";

type EditedTask = {
  id: string;
  title: string | null
}

type LoginUser = {
  id: string | undefined;
  email: string | undefined;
}