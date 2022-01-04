import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import User from '../factory/user.factory'

export default class CreateUser implements Seeder {
  public async run(
    factory: Factory,
    connection: Connection
  ): Promise<any> {
    await factory(User)().createMany(10)
  }
}
