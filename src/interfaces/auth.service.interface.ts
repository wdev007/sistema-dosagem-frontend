import { ISession } from "./session.interface";
import { IUser } from "./user.interface";

export interface IAuthService {
  signIn: (session: ISession) => Promise<IUser>;
}
