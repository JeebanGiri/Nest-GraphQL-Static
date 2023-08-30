import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from './schema/car.schema';
import { CarService } from './car.service';
import { Car as CarsModule } from '../graphql';
import { AddCarArgs } from './args/add-book.args';
import { UpdateCarArgs } from './args/update-car.args';
import { type } from 'os';

@Resolver((of) => Car)
export class CarResolver {
  constructor(private carService: CarService) {}

  // Queries and mutation define section

  @Query((returns) => [Car], { name: 'carsList' }) // we can set name here to change the default method name getAllCars as Cars.
  getAllCars(): CarsModule[] {
    return this.carService.findAllCars();
  }

  @Query((returns) => Car, { name: 'findCarsById', nullable: true }) // we can set name here to change the default method name getAllCars as Cars.
  getCarsById(
    @Args({ name: 'carId', type: () => Int }) id: number,
  ): CarsModule {
    // Car and CarsModule are the same becoz Car and CarsModule are the same class.0
    return this.carService.findCarsById(id);
  }

  @Mutation((returns) => String, { name: 'deleteCarsById' })
  deleteCarsById(@Args({ name: 'carId', type: () => Int }) id: number): String {
    return this.carService.deleteCar(id);
  }

  @Mutation((returns) => String, { name: 'addCar'})
  AddCarsById(@Args('addCarArgs') addCarArgs: AddCarArgs): String {
    return this.carService.addCar(addCarArgs);
  }
  
  @Mutation((returns) => String, { name: 'updateCar' })
  updateCarsById(
    @Args({ name: 'carId', type: () => Int }) id: number,
    @Args('updateCarArgs') updateCarArgs: UpdateCarArgs,
  ): String {
    return this.carService.updateCar(id, updateCarArgs);
  }
}
