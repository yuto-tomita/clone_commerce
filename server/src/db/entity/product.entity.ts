import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm'
import { User } from './user.entity'

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  product_name: string
  @Column()
  like_count: number
  @Column('simple-array')
  tag: string[]

  @ManyToOne(() => User, (user) => user.products)
  user: User
}
