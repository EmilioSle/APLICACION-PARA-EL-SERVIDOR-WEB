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
const express_1 = require("express");
const Sensor_1 = require("../domain/entities/Sensor");
const data_source_1 = require("../data-source");
const router = (0, express_1.Router)();
const repo = data_source_1.AppDataSource.getRepository(Sensor_1.SensorEntity);
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sensors = yield repo.find();
    res.json(sensors);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newSensor = repo.create(req.body);
    const result = yield repo.save(newSensor);
    res.status(201).json(result);
}));
exports.default = router;
