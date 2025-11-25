"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Protocol_1 = require("./entities/Protocol");
const ProtocolVersion_1 = require("./entities/ProtocolVersion");
const Step_1 = require("./entities/Step");
const Experiment_1 = require("./entities/Experiment");
const protocols_controller_1 = require("./protocols/protocols.controller");
const protocols_service_1 = require("./protocols/protocols.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST || 'localhost',
                port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
                username: process.env.POSTGRES_USER || 'eln',
                password: process.env.POSTGRES_PASSWORD || 'elnpass',
                database: process.env.POSTGRES_DB || 'eln',
                synchronize: true,
                entities: [Protocol_1.Protocol, ProtocolVersion_1.ProtocolVersion, Step_1.Step, Experiment_1.Experiment],
            }),
            typeorm_1.TypeOrmModule.forFeature([Protocol_1.Protocol, ProtocolVersion_1.ProtocolVersion, Step_1.Step, Experiment_1.Experiment]),
        ],
        controllers: [protocols_controller_1.ProtocolsController],
        providers: [protocols_service_1.ProtocolsService],
    })
], AppModule);
