import { useState, useContext, useEffect } from 'react';
import TableApp from '../shared/components/TableApp';
import { SensorContext } from '../shared/contexts/sensor.context';

const Sensors = () => {
	const [data, setData] = useState<any[]>([])
	const { sensors, findAll } = useContext(SensorContext);

	useEffect(() => {
		const request = async () => {
			await findAll()
		}
		request();
	}, [])

	useEffect(() => {
		const newData = sensors.map(item => ({
			id: item.id,
			name: item.name,
			description: item.description,
			isActive: item.isActive,
			data: item.runDataCollectionEveryInMinutes,
			date: item.createdAt,
		})) as any[]

		setData(newData);
	}, [sensors]);

  return (
		<div style={{ height: 300, width: '100%' }}>
			<TableApp data={data} />
		</div>
	);
}

export default Sensors