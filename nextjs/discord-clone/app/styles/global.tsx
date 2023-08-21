"use client";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { FC } from "react";

const GlobalStyleComponent = createGlobalStyle`
  ${Normalize}
  body {
    padding: 100px;
    background-color: red;
  }
`

const GlobalStyle: FC = () => {
  return (
    <>
      <GlobalStyleComponent />
    </>
  );
};

export default GlobalStyle;
