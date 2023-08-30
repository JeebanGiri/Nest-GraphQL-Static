import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateCarArgs{

    @Field((type) => Int)
    id: number;

    @Field()
    name: string;

    @Field((type) => Int)
    price: number
}