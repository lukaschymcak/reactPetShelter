import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePetCommand } from '../implementation/update-pet.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../../entities/pet.entity';
import { PetMapper } from '../../pet.mapper';

@CommandHandler(UpdatePetCommand)
export class UpdatePetHandler implements ICommandHandler<UpdatePetCommand> {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) {}

  async execute(command: UpdatePetCommand): Promise<void> {
    const { id, updatePetDto } = command;
    const existingPet = await this.petRepository.findOneBy({ id });

    if (!existingPet) {
      throw new Error(`Pet with ID ${id} not found`);
    }

    const updatePet = PetMapper.toEntity(updatePetDto);

    await this.petRepository.update(id, updatePet);
  }
}
