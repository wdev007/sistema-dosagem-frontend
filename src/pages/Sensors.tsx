import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';
import { useState, useContext, useEffect } from 'react';

import TableApp from '../shared/components/TableApp';
import { SensorContext } from '../shared/contexts/sensor.context';

const Sensors = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<any[]>([])
	const { sensors, findAll } = useContext(SensorContext);

	const updateRow = (row: any) => {
		navigate('/sensors/create', { state: row });
	}

	useEffect(() => {
		const request = async () => {
			await findAll()
		}
		request();
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
		<Box>
			<Stack
				direction="row-reverse"
				spacing={2}
				paddingBottom={2}
			>
				<Button variant="contained" onClick={() => navigate('/sensors/create')}>CRIAR NOVO SENSOR</Button>
			</Stack>
			<TableApp data={data} onClickRow={updateRow} />
		</Box>
	);
}

export default Sensors