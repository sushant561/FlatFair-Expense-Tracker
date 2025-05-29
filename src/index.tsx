import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { EndCalculate } from "./screens/sub-screens";
import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculate" element={<EndCalculate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
