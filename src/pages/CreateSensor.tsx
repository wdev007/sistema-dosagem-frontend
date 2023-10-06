import { useContext } from 'react';
import Button from '@mui/material/Button';
import { Box, Container } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { Grid, TextField } from "@mui/material";
import { SensorContext } from '../shared/contexts/sensor.context';

const CreateSensor = () => {
	const navigate = useNavigate();
	const { create } = useContext(SensorContext);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get('name');
		const description = formData.get('description');
		const collectionPeriod = Number(formData.get('collectionPeriod'));
		const data = {
			name,
			description,
			collectionPeriod
		}
		console.log('DADOS_CADASTRO_SENSOR: ', data);
		await create(data);
		navigate('/sensors');
	}

	return (
		<Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Descrição"
                  name="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
									type="number"
                  required
                  fullWidth
                  id="collectionPeriod"
                  label="Periodo da coleta"
                  name="collectionPeriod"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CADASTRAR
            </Button>
          </Box>
        </Box>
      </Container>
	);
}

export default CreateSensor;