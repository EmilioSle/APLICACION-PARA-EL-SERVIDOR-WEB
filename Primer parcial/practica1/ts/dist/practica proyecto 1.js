"use strict";
// 🌱 Ejemplo de Proyecto: Servicio de Sensores – Agrotech
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 📌 Variables
const sistema = "Sensor Service - Agrotech";
let totalSensores = 3;
// 📌 Objetos
const sensor1 = {
    id: 1,
    tipo: "Humedad",
    ubicacion: "Lote A",
    valor: 35.7,
    unidad: "%",
    activo: true
};
const sensor2 = {
    id: 2,
    tipo: "Temperatura",
    ubicacion: "Lote B",
    valor: 22.4,
    unidad: "°C",
    activo: true
};
// 📌 Arreglo de Objetos
const sensores = [sensor1, sensor2];
// 📌 Funciones
function agregarSensor(id, tipo, ubicacion, valor, unidad) {
    return { id, tipo, ubicacion, valor, unidad, activo: true };
}
function imprimirSensor(sensor) {
    console.log(`Sensor ${sensor.tipo} en ${sensor.ubicacion}: ${sensor.valor}${sensor.unidad}`);
}
// 📌 Spread y Rest
const nuevosSensores = [
    { id: 3, tipo: "Humedad", ubicacion: "Lote C", valor: 40.2, unidad: "%", activo: true }
];
const todosSensores = [...sensores, ...nuevosSensores];
function registrarSensores(...sensores) {
    sensores.forEach(s => console.log(`Registrado: ${s.tipo} en ${s.ubicacion}`));
}
// 📌 Callbacks
function procesarSensor(sensor, callback) {
    callback(sensor);
}
procesarSensor(sensor1, imprimirSensor);
// 📌 Promises
function guardarSensor(sensor) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Sensor ${sensor.id} guardado correctamente.`);
        }, 1000);
    });
}
// 📌 Async/Await
function iniciar() {
    return __awaiter(this, void 0, void 0, function* () {
        const mensaje = yield guardarSensor(sensor2);
        console.log(mensaje);
    });
}
iniciar();
