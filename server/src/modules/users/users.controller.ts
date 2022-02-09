import { Controller, Get, Post, Body } from '@nestjs/common'
import { UsersServise } from './users.servise'
import { CreateUserDto } from './dto/users.dto'

@Controller('users')
export class UsersController {
  constructor(private usersServise: UsersServise) {}

  @Get()
  async getAllUsers() {
    const allUsersData = await this.usersServise.getAllUsers()

    return JSON.stringify(allUsersData)
  }

  @Post()
  async createUser(@Body() param: CreateUserDto) {
    console.log(param)
    await this.usersServise.create(param)
    return 'success to create!'
  }
}
