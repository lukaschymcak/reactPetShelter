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
exports.GetPetByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_pet_by_id_query_1 = require("../implementation/get-pet-by-id.query");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pet_entity_1 = require("../../entities/pet.entity");
const pet_mapper_1 = require("../../pet.mapper");
const typeorm_2 = require("typeorm");
let GetPetByIdHandler = class GetPetByIdHandler {
    petRepository;
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async execute(query) {
        const { id } = query;
        const pet = await this.petRepository.findOneBy({ id });
        if (!pet) {
            throw new common_1.NotFoundException(`Pet with ID ${query.id} not found`);
        }
        return pet_mapper_1.PetMapper.toDto(pet);
    }
};
exports.GetPetByIdHandler = GetPetByIdHandler;
exports.GetPetByIdHandler = GetPetByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_pet_by_id_query_1.GetPetByIdQuery),
    __param(0, (0, typeorm_1.InjectRepository)(pet_entity_1.Pet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GetPetByIdHandler);
//# sourceMappingURL=get-pet-by-id.handler.js.map