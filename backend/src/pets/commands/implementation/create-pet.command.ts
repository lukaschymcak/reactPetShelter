import { CreatePetDto } from '../../dto/create-pet.dto';
export class CreatePetCommand {
  constructor(public readonly createPetDto: CreatePetDto) {}
}
