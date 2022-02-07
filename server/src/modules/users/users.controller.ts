import { Controller, Get, Post, Param } from '@nestjs/common'
import { UsersServise } from './users.servise'
import { CreateUserDto } from './dto/users.dto'

@Controller('users')
export class UsersController {
  constructor(private usersServise: UsersServise) {}

  @Get('all-user')
  async getAllUsers() {
    const allUsersData = await this.usersServise.getAllUsers()

    return JSON.stringify(allUsersData)
  }

  @Post()
  async createUser(@Param() param: CreateUserDto) {
    console.log(param)
  }
}
