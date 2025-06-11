"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = exports.QueryHandlers = exports.CommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const pets_controller_1 = require("./pets.controller");
const create_pet_handler_1 = require("./commands/handlers/create-pet.handler");
const delete_pet_handler_1 = require("./commands/handlers/delete-pet.handler");
const update_pet_handler_1 = require("./commands/handlers/update-pet.handler");
const get_all_pets_handler_1 = require("./queries/handler/get-all-pets.handler");
const get_pet_by_id_handler_1 = require("./queries/handler/get-pet-by-id.handler");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const pet_entity_1 = require("./entities/pet.entity");
exports.CommandHandlers = [
    create_pet_handler_1.CreatePetHandler,
    delete_pet_handler_1.DeletePetHandler,
    update_pet_handler_1.UpdatePetHandler,
];
exports.QueryHandlers = [get_all_pets_handler_1.GetAllPetsHandler, get_pet_by_id_handler_1.GetPetByIdHandler];
let PetsModule = class PetsModule {
};
exports.PetsModule = PetsModule;
exports.PetsModule = PetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pet_entity_1.Pet]), cqrs_1.CqrsModule],
        controllers: [pets_controller_1.PetsController],
        providers: [...exports.CommandHandlers, ...exports.QueryHandlers],
    })
], PetsModule);
//# sourceMappingURL=pets.module.js.map