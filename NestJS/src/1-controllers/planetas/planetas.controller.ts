import { Controller, Get } from '@nestjs/common';
import { PlanetasService } from './../../2-services/planetas/planetas.service';

@Controller('planetas')
export class PlanetasController {
    constructor(private readonly service: PlanetasService) {}

    @Get()
    getPlanetas(): string {
      return this.service.getPlanetas();
    }
}