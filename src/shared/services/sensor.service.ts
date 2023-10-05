
import { api } from "./api";

import { ISensor } from "../interfaces/sensor.interface";
import { IPagination } from "../interfaces/pagination.interface";
import { ISensorService } from "../interfaces/sensor.service.inteface";

const sensorService: ISensorService = {
	async findAll() {
			try {
					const response = await api.get<IPagination<ISensor>>('/sensors');
					console.log('RESPOSTINHA DA PALMIRINHA: ', response.data);
					return response.data
			} catch (error) {
				console.log('ERROR: ', error);
		}
	},
};

export default sensorService;