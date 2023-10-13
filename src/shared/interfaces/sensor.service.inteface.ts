import { ISensor } from "./sensor.interface";
import { IPagination } from "./pagination.interface";
import { ISensorDetail } from "./sensor-detail.interface";

export interface ISensorService {
  findAll: () => Promise<IPagination<ISensor> | undefined>;
  create: (data: any) => Promise<any>;
  findDetailById: (id: string) => Promise<ISensorDetail[] | undefined>;
}
