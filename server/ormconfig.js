module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pass',
  database: 'app-db',
  synchronize: true,
  // entities: [User],
  migrations: ['./src/db/migration/*.ts'],
  cli: {
    entitiesDir: './src/domain/entity',
    migrationsDir: './src/db/migration'
  }
}
