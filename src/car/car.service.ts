import { Injectable } from '@nestjs/common';
import { CarEntity } from './entities/car.entity';

@Injectable()
export class CarService {
    private carData: CarEntity[] =[]
    
    addCar(car: CarEntity): string{
        this.carData.push(car);
        return 'Car is Added Sucessfully';
    }

    deleteCar(id: number){
        this.carData= this.carData.filter((car) => car.id == id)
        return `The Car of  has been Deleted Sucessfully`;
        // ${id}

    }

    updateCar(id:number, updateCar: CarEntity): string{
        for (let i= 0; i< this.carData.length; i++){
            if(this.carData[i].id===id){
                this.carData[i] = updateCar
            }
        }
        return `The Car is updated Sucessfully..`
    }   


    findAllCars(): string | any{
        return this.carData
    }

    findCarsById(id: number): CarEntity{
        for (let i=0; i<this.carData.length; i++){
            if(this.carData[i].id === id){
                return this.carData[i];
            }
        }
    }

}
