"use strict";
// // sequelize/repositories/SensorRepository.ts
// import SensorModel from "../models/sensormodel";
// export class SensorRepository {
//   // Crear un sensor
//   async createSensor(data: {
//     type: string;
//     value: number;
//     timestamp: Date;
//   }) {
//     return await SensorModel.create(data);
//   }
//   // Obtener todos los sensores
//   async getAllSensors() {
//     return await SensorModel.findAll();
//   }
//   // Obtener sensor por id
//   async getSensorById(id: string) {
//     return await SensorModel.findByPk(id);
//   }
//   // Actualizar sensor por id
//   async updateSensor(
//     id: string,
//     data: Partial<{ type: string; value: number; timestamp: Date }>
//   ) {
//     const sensor = await SensorModel.findByPk(id);
//     if (!sensor) {
//       throw new Error("Sensor no encontrado");
//     }
//     return await sensor.update(data);
//   }
//   // Borrar sensor por id
//   async deleteSensor(id: string) {
//     const sensor = await SensorModel.findByPk(id);
//     if (!sensor) {
//       throw new Error("Sensor no encontrado");
//     }
//     await sensor.destroy();
//     return true;
//   }
// }
