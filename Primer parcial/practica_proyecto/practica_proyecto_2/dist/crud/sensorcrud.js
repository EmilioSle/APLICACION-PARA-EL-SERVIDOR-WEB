"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSensor = exports.updateSensor = exports.getSensorById = exports.getAllSensors = exports.createSensor = void 0;
const data_source_1 = require("../data-source");
const SensorEntity_1 = require("../models/SensorEntity");
const createSensor = async (sensor) => {
    const repo = data_source_1.AppDataSource.getRepository(SensorEntity_1.SensorEntity);
    const newSensor = repo.create(sensor);
    return await repo.save(newSensor);
};
exports.createSensor = createSensor;
const getAllSensors = async () => {
    const repo = data_source_1.AppDataSource.getRepository(SensorEntity_1.SensorEntity);
    return await repo.find();
};
exports.getAllSensors = getAllSensors;
const getSensorById = async (id) => {
    const repo = data_source_1.AppDataSource.getRepository(SensorEntity_1.SensorEntity);
    return await repo.findOneBy({ id });
};
exports.getSensorById = getSensorById;
const updateSensor = async (id, data) => {
    const repo = data_source_1.AppDataSource.getRepository(SensorEntity_1.SensorEntity);
    await repo.update(id, data);
    return await repo.findOneBy({ id });
};
exports.updateSensor = updateSensor;
const deleteSensor = async (id) => {
    const repo = data_source_1.AppDataSource.getRepository(SensorEntity_1.SensorEntity);
    return await repo.delete(id);
};
exports.deleteSensor = deleteSensor;
