import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./shared/AppContext/AppContextProvider.tsx";
import { ToastProvider } from "./shared/ToastContext/ToastContext.tsx";
import Toast from "./shared/ToastContext/components/Toast/Toast.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <AppProvider>
        <App />
        <Toast />
      </AppProvider>
    </ToastProvider>
  </StrictMode>
);
