import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Car{

    @Field((type) => Int)
    id: number

    @Field()
    name: string;

    @Field((type) => Int , {nullable: true})
    price: string;
}