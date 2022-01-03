import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm'
import { Product } from './product.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  name: string
  @Column('timestamp')
  created_at: Date

  @OneToMany(() => Product, (product) => product.user)
  products: Product[]
}
