import { IUser } from "./user.interface";
import { IPagination } from "./pagination.interface";

export interface IUserService {
  findAll: () => Promise<IPagination<IUser> | undefined>;
  create: (data: IUser) => Promise<IUser | undefined>;
  update: (id: string, data: IUser) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
