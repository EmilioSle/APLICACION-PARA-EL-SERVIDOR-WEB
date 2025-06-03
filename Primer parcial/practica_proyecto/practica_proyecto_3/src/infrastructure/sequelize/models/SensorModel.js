"use strict";
// sequelize/models/sensormodel.ts
//import { DataTypes, Model, Optional } from "sequelize";
//import sequelize from "../config/database";  // tu instancia de conexión
// Interfaz para los atributos del sensor
// interface SensorAttributes {
//   id: string;
//   type: string;
//   value: number;
//   timestamp: Date;
// }
// En creación, el id es opcional porque Sequelize lo genera
//interface SensorCreationAttributes extends Optional<SensorAttributes, "id"> {}
// Clase del modelo que extiende Model con atributos y creación
//class SensorModel extends Model<SensorAttributes, SensorCreationAttributes>
//   implements SensorAttributes {
//   public id!: string;
//   public type!: string;
//   public value!: number;
//   public timestamp!: Date;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }
// Inicializar el modelo (aquí es donde debe existir init)
//SensorModel.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     value: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     timestamp: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: "sensors",
//     timestamps: true,
//   }
// );
// export default SensorModel;
