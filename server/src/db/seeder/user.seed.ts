import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import User from '../factory/user.factory'

export default class CreateUser implements Seeder {
  public async run(
    factory: Factory,
    connection: Connection
  ): Promise<any> {
    await factory(User)().createMany(10)

    const userRepository = connection.getRepository(User)
    const user = new User()
    const firstUser = userRepository.findOne('017e26d8-0ee9-4e71-97d6-0ac20da07e62')
  }
}
