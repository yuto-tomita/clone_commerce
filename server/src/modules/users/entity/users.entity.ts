import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { Product } from '@/domain/entity'

export enum GenderEnum {
  MALE = 1,
  FEMALE = 2,
  NO_ANSWER = 3
}

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
  @Column({
    type: 'enum',
    enum: GenderEnum
  })
  gender: GenderEnum
  @Column({ nullable: true })
  avatar_url: string
  @Column({ nullable: true, type: 'text' })
  profile_text: string
  @CreateDateColumn()
  created_at: Date
  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Product, (product) => product.user)
  products: Product[]
}
