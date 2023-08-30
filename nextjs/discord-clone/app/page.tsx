"use client";
import styled from "styled-components";

const DiscordWrapper = styled.div`
  text-align: center`


const DiscordHeader = styled.h1`
  background-color: red;
`;

export default function Home() {
  return (
    <main>
      <DiscordWrapper>
        <DiscordHeader>
          hello discord
        </DiscordHeader>
      </DiscordWrapper>
    </main>
  );
}
