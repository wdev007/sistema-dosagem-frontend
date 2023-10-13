import { ISensor } from "./sensor.interface";
import { ISensorDetail } from "./sensor-detail.interface";

export interface ISensorContext {
  sensors: ISensor[];
  sensorDetail: ISensorDetail[] | null;
  findAll: () => Promise<void>;
  create: (data: any) => Promise<any>;
  findDetailById: (id: string) => Promise<ISensorDetail[] | undefined>;
}
