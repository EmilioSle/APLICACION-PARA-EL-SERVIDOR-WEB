"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorRepository = void 0;
const SensorEntity_1 = require("../entities/SensorEntity");
const data_source_1 = require("../../../interface/data-source");
class SensorRepository {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(SensorEntity_1.SensorEntity);
    }
    // Crear sensor
    createSensor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sensor = this.repo.create(data);
            return yield this.repo.save(sensor);
        });
    }
    // Obtener todos los sensores
    getAllSensors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.find();
        });
    }
    // Obtener sensor por id
    getSensorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.findOneBy({ id });
        });
    }
    // Actualizar sensor por id
    updateSensor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sensor = yield this.repo.findOneBy({ id });
            if (!sensor)
                return null;
            Object.assign(sensor, data);
            return yield this.repo.save(sensor);
        });
    }
    // Eliminar sensor por id
    deleteSensor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repo.delete(id);
            return result.affected !== 0;
        });
    }
}
exports.SensorRepository = SensorRepository;
