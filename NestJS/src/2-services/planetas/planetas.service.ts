import { Injectable } from '@nestjs/common';
import { Planetas } from './../../3-common/estacion/planetas';

@Injectable()
export class PlanetasService {
    getPlanetas(): any {
        return Planetas;
      }
}