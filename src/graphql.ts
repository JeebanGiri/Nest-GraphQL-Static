
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddCarArgs {
    id: number;
    name: string;
    price: number;
}

export interface UpdateCarArgs {
    id: number;
    name: string;
    price: number;
}

export interface Car {
    id: number;
    name: string;
    price?: Nullable<number>;
}

export interface IQuery {
    demo(): string | Promise<string>;
    carsList(): Car[] | Promise<Car[]>;
    findCarsById(carId: number): Nullable<Car> | Promise<Nullable<Car>>;
}

export interface IMutation {
    deleteCarsById(carId: number): string | Promise<string>;
    addCar(addCarArgs: AddCarArgs): string | Promise<string>;
    updateCar(carId: number, updateCarArgs: UpdateCarArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
