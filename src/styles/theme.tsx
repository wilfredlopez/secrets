// my-theme.ts
import { DefaultTheme, createGlobalStyle } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    primary: "var(--primary-color,#1976d2)",
    primaryTint: "#176bbf",
    primaryContrast: "var(--primary-color-contrast,#e1f5fe)",
    secondary: "#d32f2f",
    secondaryTint: "#a42323",
    secondaryContrast: "white",
    tertiary: "#dc620d",
    tertiaryTint: "#be5b17",
    tertiaryContrast: "#e0e0e0",
  },
};

export const GlobalStyles = createGlobalStyle`
font-family: 'Encode Sans Condensed', 'Libre Barcode 128 Text', cursive, sans-serif;
box-sizing: border-box;
`;

export { theme };
