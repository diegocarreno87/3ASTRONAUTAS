import { Module } from '@nestjs/common';
import { PlanetasController } from './1-controllers/planetas/planetas.controller';
import { PlanetasService } from './2-services/planetas/planetas.service';

@Module({
  imports: [],
  controllers: [ PlanetasController],
  providers: [ PlanetasService],
})
export class AppModule {}
