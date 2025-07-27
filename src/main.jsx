import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

import App from "./App.jsx";
import "./styles/index.css";
import CartProvider from "./contexts/CartContext.jsx";

const theme = createTheme({
  typography: {
    fontFamily: "'Cairo', sans-serif",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CartProvider>
  </StrictMode>,
);
