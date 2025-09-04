import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";   // 👈 import BrowserRouter
import App from "./App";
import { UserDataProvider } from "./context/UserContext";
import './index.css'; 
import CaptainContextProvider
from "./context/CaptainContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <CaptainContextProvider>
          <App />
        </CaptainContextProvider>
      </UserDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
