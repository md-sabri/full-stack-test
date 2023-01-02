import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  async getAllproducts() {
    return this.productRepo.find({});
  }

  async createProduct(data: CreateProductDto) {
    const product = this.productRepo.create(data);
    const isCreated = await this.productRepo.save(product);
    if (!isCreated) {
      throw new BadRequestException('oppes, something went wrong');
    }
    return product;
  }

  async updateProduct(data: Partial<CreateProductDto>, id: string) {
    const isUpdated = await this.productRepo.update(id, data);
    if (isUpdated.affected <= 0) {
      throw new BadRequestException(
        'oppes, we could not update your product try again later',
      );
    }
    return isUpdated.raw;
  }

  async getProduct(id: string) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new BadRequestException('we could not find your product');
    }
    return product;
  }

  async deleteProduct(id: string) {
    const isDeleted = await this.productRepo.delete(id);
    if (isDeleted.affected <= 0) {
      throw new BadRequestException('we could not update your product');
    }
    return { isDeleted: true, message: 'your product has been deleted' };
  }
}
