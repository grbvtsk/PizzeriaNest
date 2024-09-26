import { IsNumber, IsString } from "class-validator";

export class CreatePizzaDto{
  @IsString({
    message:'Name not string'
  })
  name: string
  
  @IsNumber()
  size: number
  
  @IsNumber()
  price: number
}

export type TUpdatePizzaDto = Partial<CreatePizzaDto>
