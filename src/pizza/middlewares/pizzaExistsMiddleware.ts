import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PizzaService } from "../pizza.service";

@Injectable()
export class PizzaExistsMiddleware implements NestMiddleware{

  constructor(private readonly pizzaService: PizzaService) {}
  async use (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log(`Request...`);
    const pizzaId = parseInt(req.params.id, 10)

    if (isNaN(pizzaId)) {
      throw new NotFoundException('Invalid pizza ID');
    }

    const pizza = await this.pizzaService.findById(pizzaId);

    if (!pizza) {
      throw new NotFoundException(`Pizza with ID ${pizzaId} not found`);
    }

    next();
  }
}