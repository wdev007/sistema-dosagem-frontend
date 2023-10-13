import { api } from "./api";

import { ISensor } from "../interfaces/sensor.interface";
import { IPagination } from "../interfaces/pagination.interface";
import { ISensorService } from "../interfaces/sensor.service.inteface";
import { ISensorDetail } from "../interfaces/sensor-detail.interface";

const sensorService: ISensorService = {
  async findAll() {
    try {
      const response = await api.get<IPagination<ISensor>>("/sensors");
      return response.data;
    } catch (error) {
      console.log("findall error: ", error);
    }
  },
  async create(data: any) {
    try {
      const response = await api.post("/sensors", data);
      return response;
    } catch (error) {
      console.log("create error: ", error);
    }
  },
  async findDetailById(id: string): Promise<ISensorDetail[] | undefined> {
    try {
      const response = await api.get<IPagination<ISensorDetail>>(
        `/SensorsData?Id=${id}`
      );
      return response.data.data;
    } catch (error) {
      console.log("findDetailById error: ", error);
    }
  },
};

export default sensorService;
