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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_pet_command_1 = require("./commands/implementation/create-pet.command");
const create_pet_dto_1 = require("./dto/create-pet.dto");
const pet_mapper_1 = require("./pet.mapper");
const get_all_pets_query_1 = require("./queries/implementation/get-all-pets.query");
const get_pet_by_id_query_1 = require("./queries/implementation/get-pet-by-id.query");
const delete_pet_command_1 = require("./commands/implementation/delete-pet.command");
const update_pet_dto_1 = require("./dto/update-pet.dto");
const update_pet_command_1 = require("./commands/implementation/update-pet.command");
let PetsController = class PetsController {
    CommandBus;
    QueryBus;
    constructor(CommandBus, QueryBus) {
        this.CommandBus = CommandBus;
        this.QueryBus = QueryBus;
    }
    async createPet(createPetDto) {
        const createdPet = await this.CommandBus.execute(new create_pet_command_1.CreatePetCommand(createPetDto));
        return pet_mapper_1.PetMapper.toDto(createdPet);
    }
    async updatePet(id, updatePetDto) {
        const updatedPet = await this.CommandBus.execute(new update_pet_command_1.UpdatePetCommand(id, updatePetDto));
        return pet_mapper_1.PetMapper.toDto(updatedPet);
    }
    async getAllPets() {
        return this.QueryBus.execute(new get_all_pets_query_1.GetAllPetsQuery());
    }
    async getPetById(id) {
        return this.QueryBus.execute(new get_pet_by_id_query_1.GetPetByIdQuery(id));
    }
    async deletePet(id) {
        await this.CommandBus.execute(new delete_pet_command_1.DeletePetCommand(id));
    }
};
exports.PetsController = PetsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_dto_1.CreatePetDto]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "createPet", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pet_dto_1.UpdatePetDto]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "updatePet", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "getAllPets", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "getPetById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "deletePet", null);
exports.PetsController = PetsController = __decorate([
    (0, common_1.Controller)('pets'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], PetsController);
//# sourceMappingURL=pets.controller.js.map