"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnomalyEvent = void 0;
const typeorm_1 = require("typeorm");
const SensorEntity_1 = require("./SensorEntity");
let AnomalyEvent = class AnomalyEvent {
};
exports.AnomalyEvent = AnomalyEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AnomalyEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SensorEntity_1.SensorEntity),
    __metadata("design:type", SensorEntity_1.SensorEntity)
], AnomalyEvent.prototype, "sensor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AnomalyEvent.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], AnomalyEvent.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AnomalyEvent.prototype, "fecha", void 0);
exports.AnomalyEvent = AnomalyEvent = __decorate([
    (0, typeorm_1.Entity)()
], AnomalyEvent);
