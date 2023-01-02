import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('text')
  description: string;

  @Column('int')
  price: number;

  @Column('int', { nullable: true })
  compare_at_price?: string;

  @Column('text', { array: true })
  tags: string;

  @Column('varchar')
  sku: string;

  @Column('int')
  quantity: string;

  @CreateDateColumn()
  create_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
