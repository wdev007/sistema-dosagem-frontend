import { createContext, useState } from "react";
import userService from "../services/user.service";
import { IUser } from "../interfaces/user.interface";
import { IUserContext } from "../interfaces/user.context.interface";

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: any) => {
  const [users, setUsers] = useState<IUser[]>([]);

  const findAll = async () => {
    const newUsers = await userService.findAll();
    setUsers(newUsers?.data || []);
  };

  const create = async (data: any) => {
    await userService.create(data);
    await findAll();
  };

  const remove = async (id: string) => {
    await userService.remove(id);
    await findAll();
  };

  const update = async (id: string, data: any) => {
    await userService.update(id, data);
    await findAll();
  };

  const values: IUserContext = {
    users,
    findAll,
    create,
    remove,
    update,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
