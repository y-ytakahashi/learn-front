"use client";
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    margin:0;
    background: red;
  }
`

export default GlobalStyles



