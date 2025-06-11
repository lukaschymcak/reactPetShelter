import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePetCommand } from './commands/implementation/create-pet.command';
import { Pet } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { PetDto } from './dto/pet.dto';
import { PetMapper } from './pet.mapper';
import { GetAllPetsQuery } from './queries/implementation/get-all-pets.query';
import { GetPetByIdQuery } from './queries/implementation/get-pet-by-id.query';
import { DeletePetCommand } from './commands/implementation/delete-pet.command';
import { UpdatePetDto } from './dto/update-pet.dto';
import { UpdatePetCommand } from './commands/implementation/update-pet.command';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly CommandBus: CommandBus,
    private readonly QueryBus: QueryBus,
  ) {}

  @Post()
  async createPet(@Body() createPetDto: CreatePetDto): Promise<PetDto> {
    const createdPet: Pet = await this.CommandBus.execute(
      new CreatePetCommand(createPetDto),
    );
    return PetMapper.toDto(createdPet);
  }

  @Put(':id')
  async updatePet(
    @Param('id') id: number,
    @Body() updatePetDto: UpdatePetDto,
  ): Promise<PetDto> {
    const updatedPet: Pet = await this.CommandBus.execute(
      new UpdatePetCommand(id, updatePetDto),
    );
    return PetMapper.toDto(updatedPet);
  }

  @Get()
  async getAllPets(): Promise<PetDto[]> {
    return this.QueryBus.execute(new GetAllPetsQuery());
  }

  @Get(':id')
  async getPetById(@Param('id') id: number): Promise<PetDto> {
    return this.QueryBus.execute(new GetPetByIdQuery(id));
  }

  @Delete(':id')
  async deletePet(@Param('id') id: number): Promise<void> {
    await this.CommandBus.execute(new DeletePetCommand(id));
  }
}
