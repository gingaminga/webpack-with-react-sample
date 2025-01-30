// src/index.tsx
import App from "@/renderer/App";
import React from "react";
import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("root")!;
const root = createRoot(rootNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
