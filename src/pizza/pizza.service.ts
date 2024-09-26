import { Injectable } from '@nestjs/common';
import { Pizza } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreatePizzaDto, TUpdatePizzaDto } from "./dto/pizza.dto";
@Injectable()
export class PizzaService {
  constructor(private readonly prisma:PrismaService,) {}
  findAll(): Promise<Pizza[]>{
  return this.prisma.pizza.findMany()
  }

  findById(id: number){
    return this.prisma.pizza.findUnique({where: { id },})
  }

  create(dto: CreatePizzaDto) {
    return this.prisma.pizza.create({
      data: dto,
    });
  }

  delete(id: number): Promise<Pizza>{
    return this.prisma.pizza.delete({where:{id}})
  }

  update(id:number,dto:TUpdatePizzaDto){
    return this.prisma.pizza.update({
      where: { id: id },
      data: dto,
    })
  }
}
