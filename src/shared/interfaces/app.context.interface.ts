import { ISession } from "./session.interface";
import { IUser } from "./user.interface";

export interface IAppContext {
  user: IUser | null;
  isAuthenticated: boolean;
  signIn: (session: ISession) => Promise<IUser | null>;
  signOut: () => Promise<void>;
}
