import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePetCommand } from '../implementation/create-pet.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from '../../entities/pet.entity';
import { Repository } from 'typeorm';
import { PetMapper } from '../../pet.mapper';

@CommandHandler(CreatePetCommand)
export class CreatePetHandler implements ICommandHandler<CreatePetCommand> {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) {}

  async execute(command: CreatePetCommand): Promise<Pet> {
    const newPet = PetMapper.toEntity(command.createPetDto);
    return this.petRepository.save(newPet);
  }
}
