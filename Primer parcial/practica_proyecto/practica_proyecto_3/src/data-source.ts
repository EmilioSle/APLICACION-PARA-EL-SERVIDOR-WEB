import "reflect-metadata";
import { DataSource } from "typeorm";
import { SensorEntity } from "./domain/entities/Sensor";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",  // <-- No 'localhost'
  port: 5433,
  username: "postgres",
  password: "hola12345",
  database: "sensorcapas",
  synchronize: true,
  logging: true,
  entities: [SensorEntity],
});
