import {
  IsNotEmpty,
  MinLength,
  IsPositive,
  IsNotEmptyObject,
  ArrayNotEmpty,
} from "class-validator";

export class ProductDTO {
  // @IsNotEmpty({ message: "This Field cannot blank" })
  product_name: string;

  category: string;
  gender: string;
  brand: string;
  description?: string;
  productimg_list?: string[];
  size_list: string[];
  amount: number;
}
