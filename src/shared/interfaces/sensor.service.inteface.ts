import { ISensor } from "./sensor.interface";
import { IPagination } from "./pagination.interface";
import { ISensorDetail } from "./sensor-detail.interface";

export interface ISensorService {
  findAll: () => Promise<IPagination<ISensor> | undefined>;
  create: (data: any) => Promise<any>;
  update: (id: string, data: any) => Promise<any>;
  remove: (id: string) => Promise<any>;
  findDetailById: (id: string) => Promise<ISensorDetail[] | undefined>;
}
