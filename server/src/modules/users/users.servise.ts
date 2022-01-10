import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './entity/users.entity'

@Injectable()
export class UsersServise {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>
  ) {}

  getAllUsers() {
    return this.usersRepository.createQueryBuilder().getMany()
  }
}
