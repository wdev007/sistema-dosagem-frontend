import { api } from "./api";
import { IUser } from "../interfaces/user.interface";
import { ISession } from "../interfaces/session.interface";
import { IAuthService } from "../interfaces/auth.service.interface";
import { ISignInResponse } from "../interfaces/signin-response.interface";

const authService: IAuthService = {
  signIn: async ({ email, password }: ISession): Promise<ISignInResponse> => {
    const response = await api.post<ISignInResponse>("/auth/login", {
      email,
      password,
    });

    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem("@token", token);
    localStorage.setItem("@user", JSON.stringify(response.data.user));
    localStorage.setItem("@isAuthenticated", "true");

    return response.data;
  },
  signOut: async (): Promise<void> => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@user");
    localStorage.removeItem("@isAuthenticated");
    return;
  },
  signUp: async (user: IUser): Promise<IUser> => {
    const response = await api.post<IUser>("/users", user);
    console.log(`User created! - ${response.data}`);
    return response.data;
  },
};

export default authService;
