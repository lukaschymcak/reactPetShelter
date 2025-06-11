import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { CreatePetHandler } from './commands/handlers/create-pet.handler';
import { DeletePetHandler } from './commands/handlers/delete-pet.handler';
import { UpdatePetHandler } from './commands/handlers/update-pet.handler';
import { GetAllPetsHandler } from './queries/handler/get-all-pets.handler';
import { GetPetByIdHandler } from './queries/handler/get-pet-by-id.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';

export const CommandHandlers = [
  CreatePetHandler,
  DeletePetHandler,
  UpdatePetHandler,
];

export const QueryHandlers = [GetAllPetsHandler, GetPetByIdHandler];

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), CqrsModule],
  controllers: [PetsController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class PetsModule {}
