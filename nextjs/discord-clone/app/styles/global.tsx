"use client";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const GlobalStyle: FC<Props> = ({ children }) => {
  return (
    <>
      <Normalize />
      <body>
        <div>
          <h1>attach normalie css</h1>
          <p>this is global style</p>
        </div>
      </body>
    </>
  );
};

export default GlobalStyle;
