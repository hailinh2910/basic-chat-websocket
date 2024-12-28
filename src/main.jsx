import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chat from "./component/Chat";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Chat />
  // </StrictMode>
);
