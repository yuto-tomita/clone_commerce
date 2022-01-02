import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './db/entity/User'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'devlopment',
      password: 'pass',
      database: 'app-db',
      synchronize: true,
      entities: [User],
      migrations: ['./src/db/migration/*.ts'],
      cli: {
        entitiesDir: './src/db/entity',
        migrationsDir: './src/db/migration'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
//
