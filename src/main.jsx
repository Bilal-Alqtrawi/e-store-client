import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { ThemeProvider as Theme } from "@emotion/react";
import { createTheme } from "@mui/material";

import App from "./App.jsx";
import "./styles/index.css";
import CartProvider from "./contexts/CartContext.jsx";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "'Cairo', sans-serif",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <Theme theme={theme}>
          <CssBaseline />
          <App />
        </Theme>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
