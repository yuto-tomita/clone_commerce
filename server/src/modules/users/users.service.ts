import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './interface/user.interface'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>
  ) {}

  getAllUsers() {
    return this.usersRepository.createQueryBuilder().getMany()
  }

  async create(user: User) {
    const userData = this.usersRepository.create({ ...user })
    try {
      return await this.usersRepository.save(userData)
    } catch (e) {
      return e
    }
  }
}
