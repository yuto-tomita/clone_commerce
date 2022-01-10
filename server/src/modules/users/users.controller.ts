import { Controller, Get } from '@nestjs/common'
import { UsersServise } from './users.servise'

@Controller('users')
export class UsersController {
  constructor(private usersServise: UsersServise) {}

  @Get('all-user')
  async getAllUsers() {
    const allUsersData = await this.usersServise.getAllUsers()

    return JSON.stringify(allUsersData)
  }
}
