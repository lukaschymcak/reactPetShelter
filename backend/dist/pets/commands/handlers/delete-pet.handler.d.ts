import { ICommandHandler } from '@nestjs/cqrs';
import { DeletePetCommand } from '../implementation/delete-pet.command';
import { Repository } from 'typeorm';
import { Pet } from '../../entities/pet.entity';
export declare class DeletePetHandler implements ICommandHandler<DeletePetCommand> {
    private readonly petRepository;
    constructor(petRepository: Repository<Pet>);
    execute(command: DeletePetCommand): Promise<void>;
}
