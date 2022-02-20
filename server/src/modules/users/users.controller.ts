import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/users.dto'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    const allUsersData = await this.usersService.allUsers()

    return JSON.stringify(allUsersData)
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() param: CreateUserDto) {
    // TODO: バリデーションチェックを書く
    // TODO: エラーの詳細を返す
    return await this.usersService.create(param)
  }
}
