import { User } from '@user/entity/users.entity'
import { Product } from '@/domain/entity'
import { createConnection } from 'typeorm'

export const dbProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'e-commerce-db-1',
        port: 3306,
        username: 'root',
        password: 'pass',
        database: 'app-db',
        synchronize: true,
        entities: [User, Product]
      })
  }
]
