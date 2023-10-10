import { ISession } from "./session.interface";
import { ISignInResponse } from "./signin-response.interface";
import { IUser } from "./user.interface";

export interface IAuthService {
  signIn: (session: ISession) => Promise<ISignInResponse>;
  signOut: () => Promise<void>;
  signUp: (user: IUser) => Promise<IUser>;
}
