import { Theme } from "@radix-ui/themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme
        accentColor="blue"
        // grayColor="sand"
        grayColor="slate"
        radius="large"
        scaling="95%"
        appearance="light"
        panelBackground="translucent"
      >
        <App />
        {/* <ThemePanel /> */}
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
