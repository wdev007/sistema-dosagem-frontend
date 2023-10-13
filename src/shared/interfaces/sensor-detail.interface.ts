import { ISensor } from "./sensor.interface";

export interface ISensorDetail {
  id: string;
  sensor: ISensor;
  phValue: number;
  waterColor: string;
  dosage: number;
  createdAt: string;
}
