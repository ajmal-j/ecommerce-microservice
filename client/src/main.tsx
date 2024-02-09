import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "./components/ui/sonner.tsx";
import { Toaster as HotToast } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
    <HotToast
      position='bottom-right'
      reverseOrder={false}
      toastOptions={{
        success: {
          className: "rounded-2xl bg-background text-foreground",
        },
      }}
    />
  </React.StrictMode>
);
