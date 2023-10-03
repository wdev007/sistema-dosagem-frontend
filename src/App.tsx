import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import { PrivateRoute } from "./shared/PrivateRoute";
import { ROLE } from "./shared/interfaces/user.interface";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Layout />}>
        <Route
          path="dashboard"
          element={<PrivateRoute roles={[ROLE.ADMIN]} component={Dashboard} />}
        />
        <Route
          path="users"
          element={<PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]} component={Users} />}
        />
        </Route>
    </Routes>
  );
};