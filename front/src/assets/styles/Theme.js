import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    green: "#05C194",
    greenHover: "#04A07F",
    gray : "#545454",
    yellow: "#FEBA1C",
    yellowHover: "#F9A21C",
    red: "#ED0000",
    lightGreen: "#00FC56",
  },
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;