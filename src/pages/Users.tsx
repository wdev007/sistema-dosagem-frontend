/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableApp from "../shared/components/TableApp";
import { useEffect, useContext, useState } from "react";

import Modal from "../shared/components/Modal";
import { UserContext } from "../shared/contexts/user.context";

const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [rowTemp, setRowTemp] = useState<any>({});
  const [openModal, setOpenModal] = useState(false);
  const { users, findAll, remove } = useContext(UserContext);

  const handleCloseModal = () => {
    setOpenModal(false);
    setRowTemp({});
  };

  const handleDelete = (row: any) => {
    setOpenModal(true);
    setRowTemp(row);
  };

  const handleEdit = (row: any) => {
    navigate("/users/create", { state: row });
  };

  const handleDetail = (row: any) => {
    navigate(`/users/${row.id}`, { state: row });
  };

  const removeUser = async () => {
    await remove(rowTemp.id);
    await findAll();
    setOpenModal(false);
  };

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
        <Button variant="contained" onClick={() => navigate("/users/create")}>
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
        onClickDelete={handleDelete}
        onClickEdit={handleEdit}
        onClickDetail={handleDetail}
      />
      <Modal
        open={openModal}
        content="Ao excluir o usuário, todos os dados relacionados a ele serão perdidos."
        handleClose={handleCloseModal}
        title="Deseja excluir o usuário?"
        closeText="Cancelar"
        confirmText="Excluir"
        handleConfirm={removeUser}
      />
    </Box>
  );
};

export default Users;
