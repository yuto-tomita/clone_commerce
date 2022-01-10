import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersServise } from './users.servise'
import { usersProviders } from './providers/users.providers'
import { DbModule } from '@db/db.module'
@Module({
  imports: [DbModule],
  controllers: [UsersController],
  providers: [...usersProviders, UsersServise]
})
export class UsersModule {}
