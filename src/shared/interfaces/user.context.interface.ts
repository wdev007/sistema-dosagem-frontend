import { IUser } from "./user.interface";

export interface IUserContext {
  users: IUser[];
  findAll: () => Promise<void>;
  create: (data: IUser) => Promise<void>;
  update: (id: string, data: IUser) => Promise<void>;
  remove: (id: string) => Promise<void>;
}
