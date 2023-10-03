import { IUser, ROLE } from "../interfaces/user.interface";
import { ISession } from "../interfaces/session.interface";
import { IAuthService } from "../interfaces/auth.service.interface";

const authService: IAuthService = {
  signIn: async (session: ISession): Promise<IUser> => {
    console.log("authService -> session -> ", session);
    return {
      role: ROLE.ADMIN,
    } as IUser;
  },
  signOut: async (): Promise<void> => {
    console.log("authService -> signOut -> ");
    return;
  },
};

export default authService;
