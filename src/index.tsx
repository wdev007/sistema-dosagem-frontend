import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppProvider from "./shared/contexts/app.context";
import SensorProvider from "./shared/contexts/sensor.context";
import UserProvider from "./shared/contexts/user.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <AppProvider>
      <UserProvider>
        <SensorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SensorProvider>
      </UserProvider>
    </AppProvider>
  </React.StrictMode>
);
