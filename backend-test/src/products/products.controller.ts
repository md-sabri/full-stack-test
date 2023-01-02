import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAllproducts() {
    return this.productService.getAllproducts();
  }

  @Post('/create')
  createProduct(@Body() data: CreateProductDto) {
    return this.productService.createProduct(data);
  }

  @Put('/update/:id')
  updateProduct(
    @Body() data: Partial<CreateProductDto>,
    @Param('id') id: string,
  ) {
    return this.productService.updateProduct(data, id);
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
