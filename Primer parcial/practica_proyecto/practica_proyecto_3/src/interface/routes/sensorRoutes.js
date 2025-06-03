"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/interface/routes/sensorRoutes.ts
const express_1 = require("express");
const SensorController_1 = require("../controllers/SensorController");
const router = (0, express_1.Router)();
router.get("/", SensorController_1.getAllSensors);
router.post("/", SensorController_1.createSensor);
exports.default = router;
