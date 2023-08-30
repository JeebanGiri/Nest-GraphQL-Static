import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';

@Module({
  providers: [CarService, CarResolver]
})
export class CarModule {}
