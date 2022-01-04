import { define } from 'typeorm-seeding'
import { User } from '../../domain/entity'
import * as Faker from 'faker/locale/ja'
import * as bcrypt from 'bcrypt'

define(User, (faker: typeof Faker): User => {
  const user = new User()

  const dummyPassword = faker.internet.password()
  const saltRounds = 10
  const hashPassword = bcrypt.hashSync(dummyPassword, saltRounds)

  user.email = faker.internet.email()
  user.password = hashPassword
  user.avatar_url = faker.internet.avatar()

  return user
})

export default User
