import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class ApplicationModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        // tslint:disable-next-line:no-console
        console.log('consumer middleware');
        next();
      })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
