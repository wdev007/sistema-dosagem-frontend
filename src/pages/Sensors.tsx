/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { useState, useContext, useEffect } from "react";

import TableApp from "../shared/components/TableApp";
import { SensorContext } from "../shared/contexts/sensor.context";

const Sensors = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const { sensors, findAll } = useContext(SensorContext);

  const sensorDetail = (row: any) => {
    navigate(`/sensors/${row.id}`);
  };

  const sensorDelete = (row: any) => {
    console.log("delete", row);
  };

  const sensorEdit = (row: any) => {
    console.log("edit", row);
    navigate("/sensors/create", { state: row });
  };

  useEffect(() => {
    const request = async () => {
      await findAll();
    };
    request();
  }, []);

  useEffect(() => {
    const newData = sensors.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      isActive: item.isActive ? "Ativo" : "Inativo",
      data: item.runDataCollectionEveryInMinutes,
      date: item.createdAt,
    })) as any[];

    setData(newData);
  }, [sensors]);

  return (
    <Box>
      <Stack direction="row-reverse" spacing={2} paddingBottom={2}>
        <Button variant="contained" onClick={() => navigate("/sensors/create")}>
          CRIAR NOVO SENSOR
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
            key: "description",
            name: "Descrição",
          },
          {
            key: "isActive",
            name: "Status",
          },
          {
            key: "data",
            name: "Periodo de coleta",
          },
          {
            key: "date",
            name: "Data",
          },
        ]}
        onClickDetail={sensorDetail}
        onClickDelete={sensorDelete}
        onClickEdit={sensorEdit}
      />
    </Box>
  );
};

export default Sensors;
