import { createContext, useState } from "react";
import sensorService from "../services/sensor.service";
import { ISensor } from "../interfaces/sensor.interface";
import { ISensorDetail } from "../interfaces/sensor-detail.interface";
import { ISensorContext } from "../interfaces/sensor.context.interface";

export const SensorContext = createContext({} as ISensorContext);

const SensorProvider = ({ children }: any) => {
  const [sensors, setSensors] = useState<ISensor[]>([]);
  const [sensorDetail, setSensorDetail] = useState<ISensorDetail[] | null>([]);

  const findAll = async () => {
    const newSensors = await sensorService.findAll();
    setSensors(newSensors?.data || []);
  };

  const create = async (data: any) => {
    await sensorService.create(data);
    await findAll();
  };

  const findDetailById = async (id: string): Promise<any> => {
    const sensorDetail = await sensorService.findDetailById(id);
    setSensorDetail(sensorDetail || []);
  };

  const update = async (id: string, data: any) => {
    await sensorService.update(id, data);
    await findAll();
  };

  const remove = async (id: string) => {
    await sensorService.remove(id);
    await findAll();
  };

  const values: ISensorContext = {
    sensors,
    findAll,
    create,
    findDetailById,
    sensorDetail,
    update,
    remove,
  };

  return (
    <SensorContext.Provider value={values}>{children}</SensorContext.Provider>
  );
};

export default SensorProvider;
