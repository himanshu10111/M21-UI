import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/m-21-main.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </React.StrictMode>
  </BrowserRouter>
);
