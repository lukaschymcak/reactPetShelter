import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPetByIdQuery } from '../implementation/get-pet-by-id.query';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetDto } from 'src/pets/dto/pet.dto';
import { Pet } from 'src/pets/entities/pet.entity';
import { PetMapper } from 'src/pets/pet.mapper';
import { Repository } from 'typeorm';

@QueryHandler(GetPetByIdQuery)
export class GetPetByIdHandler implements IQueryHandler<GetPetByIdQuery> {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) {}

  async execute(query: GetPetByIdQuery): Promise<PetDto> {
    const { id } = query;
    const pet = await this.petRepository.findOneBy({ id });

    if (!pet) {
      throw new NotFoundException(`Pet with ID ${query.id} not found`);
    }
    return PetMapper.toDto(pet);
  }
}
