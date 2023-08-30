//NOTE styled-component default themeの拡張
import "styled-components";
import { theme } from "../app/styles/theme"

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

