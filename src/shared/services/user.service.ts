import { api } from "./api";

import { IUser } from "../interfaces/user.interface";
import { IPagination } from "../interfaces/pagination.interface";
import { IUserService } from "../interfaces/user.service.inteface";

const userService: IUserService = {
  async findAll() {
    try {
      const response = await api.get<IPagination<IUser>>("/users");
      return response.data;
    } catch (error) {
      console.log("findall error: ", error);
    }
  },
  async create(data) {
    try {
      const response = await api.post<IUser>("/users", data);
      return response.data;
    } catch (error) {
      console.log("create error: ", error);
    }
  },
  async update(id: string, data: any) {
    try {
      const response = await api.put<IUser>(`/users/${id}`, data);
      console.log("update response: ", response);
    } catch (error) {
      console.log("create error: ", error);
    }
  },
  async remove(id) {
    try {
      const response = await api.delete<IUser>(`/users/${id}`);
      console.log("remove response: ", response);
    } catch (error) {
      console.log("remove error: ", error);
    }
  },
};

export default userService;
