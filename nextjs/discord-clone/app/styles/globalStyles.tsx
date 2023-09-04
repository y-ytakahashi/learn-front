"use client";
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    margin:0;
    padding:0;
    font-size: 62.5%;
  }
`

export default GlobalStyles



