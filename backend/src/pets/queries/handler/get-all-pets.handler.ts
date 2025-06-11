import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllPetsQuery } from '../implementation/get-all-pets.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/pets/entities/pet.entity';
import { PetMapper } from 'src/pets/pet.mapper';
import { Repository } from 'typeorm';
import { PetDto } from 'src/pets/dto/pet.dto';

@QueryHandler(GetAllPetsQuery)
export class GetAllPetsHandler implements IQueryHandler<GetAllPetsQuery> {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) {}

  async execute(): Promise<PetDto[]> {
    const pets = await this.petRepository.find({ order: { id: 'ASC' } });
    return pets.map((pet) => PetMapper.toDto(pet));
  }
}
