import { createContext, useState } from 'react';
import { ISession } from '../interfaces/session.interface';
import { ISensorContext } from '../interfaces/sensor.context.interface';
import { ISensor } from '../interfaces/sensor.interface';
import sensorService from '../services/sensor.service';

export const SensorContext = createContext({} as ISensorContext);

const SensorProvider = ({ children }: any) => {
	const [sensors, setSensors] = useState<ISensor[]>([]);

	const findAll = async () => {
		const newSensors = await sensorService.findAll();
		console.log('newSensors:: ', newSensors);
		setSensors(newSensors?.data || []);
	}

	const values: ISensorContext = {
		sensors,
		findAll
	}

	return (
		<SensorContext.Provider value={values}>
			{children}
		</SensorContext.Provider>
	);
};

export default SensorProvider;