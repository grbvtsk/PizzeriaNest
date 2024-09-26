import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [PizzaController],
  providers: [PizzaService,PrismaService],
  exports: [PizzaService]
})
export class PizzaModule {}
