import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm'
import { User } from '@/modules/users/entity/users.entity'

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  product_name: string
  @Column({
    type: 'text',
    nullable: true
  })
  product_description: string
  @Column()
  like_count: number
  @Column()
  product_price: number
  @Column('simple-array')
  tag: string[]
  @Column('simple-array', { nullable: true })
  product_images: string[]

  @ManyToOne(() => User, (user) => user.products)
  user: User
}
