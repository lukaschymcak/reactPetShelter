import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeletePetCommand } from '../implementation/delete-pet.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../../entities/pet.entity';

@CommandHandler(DeletePetCommand)
export class DeletePetHandler implements ICommandHandler<DeletePetCommand> {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) {}

  async execute(command: DeletePetCommand): Promise<void> {
    const id = command;
    await this.petRepository.delete(id);
  }
}
