import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./global.css";
import { Routers } from "./routes/Routers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <App /> */}
        {/* <App /> */}
        <Routers />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
