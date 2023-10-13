import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { Box, Container } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../shared/contexts/user.context";

import { ROLE } from "../shared/interfaces/user.interface";

const UserForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [role, setRole] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isActive, setIsActive] = useState<number>(0);
  const { update } = useContext(UserContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const role = formData.get("role") as ROLE;
    const email = formData.get("email") as string;
    const isActive = formData.get("isActive") as string;

    const data = {
      name,
      email,
      isActive: Number(isActive) === 1 ? true : false,
      role,
    };

    if (state) {
      await update(state.id, data);
    }
    navigate("/users");
  };

  useEffect(() => {
    if (state) {
      const { name, email, isActive, role } = state;

      setName(name);
      setEmail(email);
      setIsActive(isActive === "Ativo" ? 1 : 0);
      setRole(role);
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
                type="email"
                id="email"
                label="E-mail"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="select-role-user">Perfil do usuário</InputLabel>
                <Select
                  labelId="role-user"
                  id="role-user"
                  value={role}
                  label="Perfil do usuário"
                  onChange={(event) => setRole(event.target.value as string)}
                >
                  <MenuItem value="ADMIN">Admin</MenuItem>
                  <MenuItem value="USER">Usuário comum</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="select-user-status">
                  Status do usuário
                </InputLabel>
                <Select
                  labelId="user-status"
                  id="user-status"
                  value={isActive}
                  label="Status do usuário"
                  onChange={(event) =>
                    setIsActive(event.target.value as number)
                  }
                >
                  <MenuItem value={1}>Ativo</MenuItem>
                  <MenuItem value={0}>Inativo</MenuItem>
                </Select>
              </FormControl>
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

export default UserForm;
