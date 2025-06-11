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
exports.UpdatePetHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_pet_command_1 = require("../implementation/update-pet.command");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pet_entity_1 = require("../../entities/pet.entity");
const pet_mapper_1 = require("../../pet.mapper");
let UpdatePetHandler = class UpdatePetHandler {
    petRepository;
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async execute(command) {
        const { id, updatePetDto } = command;
        const existingPet = await this.petRepository.findOneBy({ id });
        if (!existingPet) {
            throw new Error(`Pet with ID ${id} not found`);
        }
        const updatePet = pet_mapper_1.PetMapper.toEntity(updatePetDto);
        await this.petRepository.update(id, updatePet);
    }
};
exports.UpdatePetHandler = UpdatePetHandler;
exports.UpdatePetHandler = UpdatePetHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_pet_command_1.UpdatePetCommand),
    __param(0, (0, typeorm_1.InjectRepository)(pet_entity_1.Pet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UpdatePetHandler);
//# sourceMappingURL=update-pet.handler.js.map