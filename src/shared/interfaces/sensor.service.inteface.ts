import { IPagination } from "./pagination.interface";
import { ISensor } from "./sensor.interface";

export interface ISensorService {
	findAll: () => Promise<IPagination<ISensor> | undefined>;
	create: (data: any) => Promise<any>;
}