import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import { User, Product } from '../factory'
import * as Faker from 'faker/locale/ja'

export default class CreateUser implements Seeder {
  public async run(
    factory: Factory,
    connection: Connection
  ): Promise<any> {
    await factory(User)().createMany(10)

    const userRepository = connection.getRepository(User)
    const firstUser = userRepository.findOne('017e26d8-0ee9-4e71-97d6-0ac20da07e62')

    const productRepository = connection.getRepository(Product)
    const product = new Product()

    product.like_count = 0
    product.product_description = Faker.commerce.productDescription()
    product.product_images = [Faker.image.imageUrl()]
    product.product_name = Faker.commerce.productName()
    product.tag = [Faker.commerce.product(), Faker.commerce.product()]
    product.user = await firstUser

    await productRepository.save(product)
  }
}
