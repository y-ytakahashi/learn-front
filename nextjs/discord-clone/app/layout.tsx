"use client";
import StyledComponentsRegistry from "./registry";
import React from "react";
import GlobalStyles from "@/app/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "@/app/styles/theme";
import { Noto_Sans_JP } from "next/font/google";
// NOTE Webfontの設定記事 https://zenn.dev/tsuyoshi/articles/894592ac677148
const noteSansJapanese = Noto_Sans_JP({
  preload: false
});


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={noteSansJapanese.className}>
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
    </body>
    </html>
  );
}
