"use client";
import Sidebar from "@/components/sidebar/sidebar";
import Chat from "@/components/chat/chat";
import styled from "styled-components";


const HomeContainer = styled.div`
  display: flex;
  flex-grow: 1;
`


export default function Home() {
  return (
    <HomeContainer>
      {/*  sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </HomeContainer>
  );
}
