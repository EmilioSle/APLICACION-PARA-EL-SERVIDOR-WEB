import { AppDataSource } from "../data-source";
import { SensorEntity } from "../models/SensorEntity";

export const createSensor = async (sensor: Partial<SensorEntity>) => {
  const repo = AppDataSource.getRepository(SensorEntity);
  const newSensor = repo.create(sensor);
  return await repo.save(newSensor);
};

export const getAllSensors = async () => {
  const repo = AppDataSource.getRepository(SensorEntity);
  return await repo.find();
};

export const getSensorById = async (id: number) => {
  const repo = AppDataSource.getRepository(SensorEntity);
  return await repo.findOneBy({ id });
};

export const updateSensor = async (id: number, data: Partial<SensorEntity>) => {
  const repo = AppDataSource.getRepository(SensorEntity);
  await repo.update(id, data);
  return await repo.findOneBy({ id });
};

export const deleteSensor = async (id: number) => {
  const repo = AppDataSource.getRepository(SensorEntity);
  return await repo.delete(id);
};
