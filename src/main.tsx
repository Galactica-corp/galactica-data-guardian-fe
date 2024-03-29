import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { App } from "app/app";

const container = document.getElementById("app");
const root = createRoot(container!);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.api = {
  VITE_GRAPHQL_SERVER: import.meta.env.VITE_GRAPHQL_SERVER,
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
