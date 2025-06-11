"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetMapper = void 0;
const pet_entity_1 = require("./entities/pet.entity");
const pet_dto_1 = require("./dto/pet.dto");
class PetMapper {
    static toDto(entity) {
        const dto = new pet_dto_1.PetDto();
        dto.id = entity.id;
        dto.name = entity.name;
        dto.type = entity.type;
        dto.breed = entity.breed;
        dto.age = entity.age;
        dto.imageUrl = entity.imageUrl;
        dto.description = entity.description;
        return dto;
    }
    static toEntity(dto) {
        const entity = new pet_entity_1.Pet();
        entity.name = dto.name;
        entity.type = dto.type;
        entity.breed = dto.breed ?? '';
        entity.age = dto.age ?? 0;
        entity.imageUrl = dto.imageUrl ?? '';
        entity.description = dto.description ?? '';
        return entity;
    }
}
exports.PetMapper = PetMapper;
//# sourceMappingURL=pet.mapper.js.map