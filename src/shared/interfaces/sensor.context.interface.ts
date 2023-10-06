import { ISensor } from "./sensor.interface";
import { IPagination } from "./pagination.interface";

export interface ISensorContext {
  sensors: ISensor[];
  findAll: () => Promise<void>;
  create: (data: any) => Promise<any>;
}
