import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
// import { fakeAuthProvider } from "./auth";
import { PrivateRoute } from "./shared/PrivateRoute";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { ROLE } from "./shared/interfaces/user.interface";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import AppProvider from "./shared/contexts/app.context";

export default function App() {
  return (
    <AppProvider >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="dashboard"
          element={<PrivateRoute roles={[ROLE.ADMIN]} component={Dashboard} />}
        />
        <Route
          path="users"
          element={<PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]} component={Users} />}
        />
      </Routes>
    </AppProvider>
  );
};