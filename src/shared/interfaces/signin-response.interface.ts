import { IUser } from "./user.interface";

export interface ISignInResponse {
  token: string;
  user: IUser;
}
