import "reflect-metadata";
import { DataSource } from "typeorm";
import { SensorEntity } from "./models/SensorEntity";
import { SensorData } from "./models/SensorData";
import { AnomalyEvent } from "./models/AnomalyEvent";
import { DroughtPrediction } from "./models/DroughtPrediction";
import { SensorConfiguration } from "./models/SensorConfiguration";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345",
  database: "agrotech_db",
  synchronize: true, // Solo en desarrollo
  logging: true,
  entities: [
    SensorEntity,
    SensorData,
    AnomalyEvent,
    DroughtPrediction,
    SensorConfiguration
  ],
});