import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={darkTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
);
