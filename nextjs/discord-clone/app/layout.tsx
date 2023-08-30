"use client";
import StyledComponentsRegistry from "./registry";
import React from "react";
import GlobalStyles from "@/app/styles/globalStyles";
import { ThemeProvider} from "styled-components";
import theme from "@/app/styles/theme";


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html>
    <body>
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
