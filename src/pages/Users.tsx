import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import TableApp from "../shared/components/TableApp";
import { UserContext } from "../shared/contexts/user.context";

const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const { users, findAll } = useContext(UserContext);

  useEffect(() => {
    const request = async () => {
      await findAll();
    };
    request();
  }, []);

  useEffect(() => {
    const newData = users.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      isActive: item.isActive ? "Ativo" : "Inativo",
      role: item.role,
      date: item.createdAt,
    })) as any[];

    setData(newData);
  }, [users]);

  return (
    <Box>
      <Stack direction="row-reverse" spacing={2} paddingBottom={2}>
        <Button variant="contained" onClick={() => navigate("/sensors/create")}>
          CRIAR NOVO USUÁRIO
        </Button>
      </Stack>
      <TableApp
        data={data}
        hasActions
        columns={[
          {
            key: "name",
            name: "Nome",
          },
          {
            key: "email",
            name: "E-mail",
          },
          {
            key: "isActive",
            name: "Status",
          },
          {
            key: "role",
            name: "Perfil",
          },
          {
            key: "date",
            name: "Data",
          },
        ]}
      />
    </Box>
  );
};

export default Users;
