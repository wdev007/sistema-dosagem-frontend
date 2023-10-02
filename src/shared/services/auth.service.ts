import { ISession } from "../interfaces/session.interface";
import { IAuthService } from "../interfaces/auth.service.interface";

const authService: IAuthService = {
  signIn: async (session: ISession) => {
    return {} as any;
  },
};

export default authService;
