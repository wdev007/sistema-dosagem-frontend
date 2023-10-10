import { IUser } from "./user.interface";
import { ISession } from "./session.interface";

export interface IAppContext {
  user: IUser | null;
  isAuthenticated: boolean;
  signIn: (session: ISession) => Promise<IUser | null>;
  signOut: () => Promise<void>;
  signUp: (user: IUser) => Promise<IUser | null>;
}
