import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import DaRomaniaApp from "./DaRomaniaApp";
import { AuthProvider } from "./auth/AuthContext";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <DaRomaniaApp />
    </BrowserRouter>
  </AuthProvider>
);
