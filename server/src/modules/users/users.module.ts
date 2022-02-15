import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { usersProviders } from './providers/users.providers'
import { DbModule } from '@db/db.module'
@Module({
  imports: [DbModule],
  controllers: [UsersController],
  providers: [...usersProviders, UsersService]
})
export class UsersModule {}
