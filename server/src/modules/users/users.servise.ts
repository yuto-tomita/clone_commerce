import { Injectable, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entity/users.entity'

@Injectable()
export class UsersServise {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>
  ) {}

  create(user: User) {
    this.usersRepository.create(user)
  }

  getHello() {
    return 'hello world!'
  }
}
