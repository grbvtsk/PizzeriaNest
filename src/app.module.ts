import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PizzaModule } from './pizza/pizza.module';
import { ConfigModule } from '@nestjs/config';
import { PizzaExistsMiddleware } from "./pizza/middlewares/pizzaExistsMiddleware";

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal:true,
  }) ,PizzaModule],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(PizzaExistsMiddleware)
      .forRoutes('pizza/:id')
  }
}
