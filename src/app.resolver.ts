import { Query, Resolver } from "@nestjs/graphql";


@Resolver(of=> String)
export class AppResolver{

    @Query(returns => String)
    demo(): string{
        return 'Hello Lamborgini...'
    }
}