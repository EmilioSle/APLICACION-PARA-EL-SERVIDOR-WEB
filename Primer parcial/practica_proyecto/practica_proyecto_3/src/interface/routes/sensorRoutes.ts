// src/interface/routes/sensorRoutes.ts
import { Router } from "express";
import { createSensor, getAllSensors } from "../controllers/SensorController";

const router = Router();

router.get("/", getAllSensors);
router.post("/", createSensor);

export default router;



