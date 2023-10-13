import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";
import { Grid, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SensorContext } from "../shared/contexts/sensor.context";

const SensorForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [collectionPeriod, setCollectionPeriod] = useState<number>(0);
  const { create, update } = useContext(SensorContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const description = formData.get("description");
    const collectionPeriod = Number(formData.get("collectionPeriod"));
    const data = {
      name,
      description,
      runDataCollectionEveryInMinutes: collectionPeriod,
    };
    if (state) {
      await update(state.id, data);
    } else {
      await create(data);
    }
    navigate("/sensors");
  };

  useEffect(() => {
    if (state) {
      const { name, description, data } = state;
      setName(name);
      setDescription(description);
      setCollectionPeriod(data);
    }
  }, [state]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="description"
                label="Descrição"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
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
                value={collectionPeriod}
                onChange={(event) =>
                  setCollectionPeriod(Number(event.target.value))
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {state ? "ATUALIZAR" : "CRIAR"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SensorForm;
