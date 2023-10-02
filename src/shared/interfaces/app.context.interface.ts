import { ISession } from "./session.interface";
import { IUser } from "./user.interface";

export interface IAppContext {
  user: IUser | null;
  signIn: (session: ISession) => Promise<IUser | null>;
}
