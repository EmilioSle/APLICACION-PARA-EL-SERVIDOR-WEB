import { Router } from "express";
import { SensorEntity } from "../domain/entities/Sensor";
import { AppDataSource } from "../data-source";

const router = Router();
const repo = AppDataSource.getRepository(SensorEntity);

router.get("/", async (_req, res) => {
  const sensors = await repo.find();
  res.json(sensors);
});

router.post("/", async (req, res) => {
  const newSensor = repo.create(req.body);
  const result = await repo.save(newSensor);
  res.status(201).json(result);
});

export default router;
