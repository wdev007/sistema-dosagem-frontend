import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AccessDenied from "../pages/AccessDenied";
import { ROLE } from "../shared/interfaces/user.interface";
import { AppContext } from "./contexts/app.context";

interface Props {
  component: React.ComponentType;
  path?: string;
  isPublic?: boolean;
  roles: Array<ROLE>;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
  isPublic,
}) => {
  const { isAuthenticated, user } = useContext(AppContext);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("@user");
  //   console.log("storedUser", storedUser);
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //     setIsAuthenticated(true);
  //     console.log("__user__", storedUser);
  //     console.log("__isAuthenticated__", isAuthenticated);
  //   } else {
  //     console.log("user_else", storedUser);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("user??", user);
  //   console.log("isAuthenticated??", isAuthenticated);
  // }, [user, isAuthenticated]);

  const userHasRequiredRole = user && roles.includes(user?.role) ? true : false;
  // console.log("private_route");
  // console.log("userHasRequiredRole", userHasRequiredRole);
  // console.log("isAuthenticated", isAuthenticated);
  // console.log("user", user);
  // console.log("roles", roles);
  // console.log("isPublic", isPublic);

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />;
  }

  if (isPublic) {
    return <RouteComponent />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />;
  }

  return <Navigate to="/login" />;
};
