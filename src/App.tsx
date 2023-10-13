import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Sensors from "./pages/Sensors";

import { PrivateRoute } from "./shared/PrivateRoute";
import { ROLE } from "./shared/interfaces/user.interface";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import SensorForm from "./pages/SensorForm";
import SensorDetail from "./pages/SensorDetail";
import UserForm from "./pages/UserForm";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute roles={[]} component={Login} isPublic />}
      />
      <Route
        path="/login"
        element={<PrivateRoute roles={[]} component={Login} isPublic />}
      />
      <Route
        path="/register"
        element={<PrivateRoute roles={[]} component={Register} isPublic />}
      />
      <Route path="*" element={<NotFound />} />
      <Route element={<Layout />}>
        <Route
          path="sensors"
          element={<PrivateRoute roles={[ROLE.ADMIN]} component={Sensors} />}
        />
        <Route
          path="sensors/:id"
          element={
            <PrivateRoute roles={[ROLE.ADMIN]} component={SensorDetail} />
          }
        />
        <Route
          path="sensors/create"
          element={<PrivateRoute roles={[ROLE.ADMIN]} component={SensorForm} />}
        />
        <Route
          path="users"
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]} component={Users} />
          }
        />
        <Route
          path="users/create"
          element={<PrivateRoute roles={[ROLE.ADMIN]} component={UserForm} />}
        />
        <Route
          path="users/:id"
          element={
            <PrivateRoute
              roles={[ROLE.ADMIN, ROLE.USER]}
              component={UserForm}
            />
          }
        />
        <Route
          path="settings"
          element={
            <PrivateRoute
              roles={[ROLE.ADMIN, ROLE.USER]}
              component={Settings}
            />
          }
        />
        <Route
          path="support"
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]} component={Support} />
          }
        />
      </Route>
    </Routes>
  );
}
