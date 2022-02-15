import { Controller, Get, Post, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/users.dto'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    const allUsersData = await this.usersService.getAllUsers()

    return JSON.stringify(allUsersData)
  }

  @Post()
  async createUser(@Body() param: CreateUserDto) {
    console.log(param)
    // TODO: バリデーションチェックを書く
    // TODO: エラーの詳細を返す
    await this.usersService.create(param)
    return 'success to create!'
  }
}
