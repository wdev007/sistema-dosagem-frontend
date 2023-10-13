import { createContext, useState } from "react";
import authService from "../services/auth.service";
import { IUser } from "../interfaces/user.interface";
import { ISession } from "../interfaces/session.interface";
import { IAppContext } from "../interfaces/app.context.interface";

export const AppContext = createContext({} as IAppContext);

const AppProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(() => {
    const user = sessionStorage.getItem("@user");
    if (user) return JSON.parse(user);
    return null;
  });

  const signIn = async ({
    email,
    password,
  }: ISession): Promise<IUser | null> => {
    const { user: loggedInUser } = await authService.signIn({
      email,
      password,
    });
    setUser(loggedInUser);
    setIsAuthenticated(true);
    return loggedInUser;
  };

  const signOut = async () => {
    await authService.signOut();
    setUser(null);
    setIsAuthenticated(false);
  };

  const signUp = async ({
    name,
    email,
    password,
    role,
  }: IUser): Promise<IUser | null> => {
    const newUser = await authService.signUp({ name, email, password, role });
    return newUser;
  };

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("@user");

  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //     setIsAuthenticated(true);
  //     console.log("__user__", storedUser);
  //     console.log("__isAuthenticated__", isAuthenticated);
  //   } else {
  //     console.log("user_else", storedUser);
  //   }
  // }, [isAuthenticated]);

  const values = {
    user,
    isAuthenticated,
    signIn,
    signOut,
    signUp,
    setUser,
    setIsAuthenticated,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
