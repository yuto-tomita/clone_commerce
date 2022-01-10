import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entity/users.entity'

@Injectable()
export class UserServise {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  create(user: User) {
    this.usersRepository.create(user)
  }
}
