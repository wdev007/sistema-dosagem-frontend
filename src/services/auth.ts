export interface IAuthService {
  isAuthenticated: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  user: any;
}

export const authService: IAuthService = {
  isAuthenticated: false,
  signIn: async (username: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    authService.isAuthenticated = true;
    authService.user = { username, password };
    console.log("USER: ", authService.user);
    return;
  },
  signOut: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    authService.isAuthenticated = false;
    authService.user = null;
    return;
  },
  user: null,
};
