"use client";
import Sidebar from "@/components/sidebar/sidebar";
import Chat from "@/components/chat/chat";
import styled from "styled-components";
import Login from "@/components/login/login";
import { useAppSelector } from "@/app/hooks";


const HomeContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;


export default function Home() {

  const user = useAppSelector((state) => state.user);
  console.log(user);

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
