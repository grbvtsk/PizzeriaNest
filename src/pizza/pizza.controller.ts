import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PizzaService } from './pizza.service';
import { CreatePizzaDto, TUpdatePizzaDto } from "./dto/pizza.dto";

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}
  @Get()
  findAll(){
    return this.pizzaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.pizzaService.findById(Number(id));
  }

  @Post()
  create(@Body() dto:CreatePizzaDto){
    return this.pizzaService.create(dto)
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.pizzaService.delete(Number(id));
  }

  @Put(':id')
  update(@Param('id') id:string,@Body() dto:TUpdatePizzaDto){
    return this.pizzaService.update(Number(id),dto)
  }
}
