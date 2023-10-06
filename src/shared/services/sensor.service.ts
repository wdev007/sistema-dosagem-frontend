
import { api } from "./api";

import { ISensor } from "../interfaces/sensor.interface";
import { IPagination } from "../interfaces/pagination.interface";
import { ISensorService } from "../interfaces/sensor.service.inteface";

const sensorService: ISensorService = {
	async findAll() {
		try {
			const response = await api.get<IPagination<ISensor>>('/sensors');
			return response.data
		} catch (error) {
			console.log('findall error: ', error);
		}
	},
	async create(data: any) {
		try {
			const response = await api.post('/sensors', data);
			return response;
		} catch (error) {
			console.log('create error: ', error);
		}
	},
};

export default sensorService;