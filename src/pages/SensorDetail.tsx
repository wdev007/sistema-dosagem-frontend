/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { SensorContext } from "../shared/contexts/sensor.context";
import TableApp from "../shared/components/TableApp";

const SensorDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<any[]>([]);
  const { findDetailById, sensorDetail } = useContext(SensorContext);

  useEffect(() => {
    if (id) {
      const request = async () => {
        await findDetailById(id);
        console.log(sensorDetail);
      };
      request();
    }
  }, [id]);

  useEffect(() => {
    const newData = sensorDetail?.map((item) => ({
      id: item.id,
      sensor_name: item.sensor.name,
      dosage: item.dosage,
      phValue: item.phValue,
      waterColor: item.waterColor,
      createdAt: item.createdAt,
    })) as any[];

    setData(newData);
  }, [sensorDetail]);

  return (
    <Box>
      <TableApp
        data={data}
        columns={[
          {
            key: "sensor_name",
            name: "Sensor",
          },
          {
            key: "dosage",
            name: "Dosagem",
          },
          {
            key: "phValue",
            name: "Valor de PH",
          },
          {
            key: "waterColor",
            name: "Cor da água",
          },
          {
            key: "createdAt",
            name: "Data de criação",
          },
        ]}
      />
    </Box>
  );
};

export default SensorDetail;
