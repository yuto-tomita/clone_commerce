import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  name: string
  @Column()
  product_id: number
}
