import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './domain/entity'
import { User } from '@user/entity/user.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'e-commerce-db-1',
      port: 3306,
      username: 'root',
      password: 'pass',
      database: 'app-db',
      entities: [User, Product],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}
//
