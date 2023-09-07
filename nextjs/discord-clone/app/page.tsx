"use client";
import Sidebar from "@/components/sidebar/sidebar";
import Chat from "@/components/chat/chat";
import styled from "styled-components";
import Login from "@/components/login/login";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { auth } from "@/firebase";
import { login, logout } from "@/features/userSlice";


const HomeContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;


export default function Home() {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName
        }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);


  return (
    <HomeContainer>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )
      }
    </HomeContainer>

  );
}
