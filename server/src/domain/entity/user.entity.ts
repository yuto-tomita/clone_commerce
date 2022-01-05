import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { Product } from './product.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column({ unique: true })
  email: string
  @Column('varchar')
  password: string
  @Column()
  name: string
  @Column({ nullable: true })
  avatar_url: string
  @CreateDateColumn()
  created_at: Date
  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Product, (product) => product.user)
  products: Product[]
}
