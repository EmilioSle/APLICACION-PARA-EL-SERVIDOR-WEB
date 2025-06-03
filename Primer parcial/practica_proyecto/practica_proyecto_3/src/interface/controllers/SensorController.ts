import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { SensorEntity } from "../../domain/entities/Sensor";

const sensorRepository = AppDataSource.getRepository(SensorEntity);

export const createSensor = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("Request body:", req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "El cuerpo de la solicitud está vacío" });
      return;
    }

    const sensor = sensorRepository.create(req.body);
    const result = await sensorRepository.save(sensor);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error guardando sensor:", error);
    res.status(500).json({ error: "Error al guardar el sensor", details: error });
  }
};

export const getAllSensors = async (_req: Request, res: Response): Promise<void> => {
  try {
    const sensors = await sensorRepository.find();
    res.json(sensors);
  } catch (error) {
    console.error("Error obteniendo sensores:", error);
    res.status(500).json({ error: "Error al obtener sensores", details: error });
  }
};
