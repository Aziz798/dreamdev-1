import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./index.css";
import App from "@/app";
import { BrowserRouter as Router } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>,
);


