module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pass',
  database: 'app-db',
  synchronize: true,
  migrations: ['./src/db/migration/*.ts'],
  seeds: ['./src/db/seeder/*.seed{.ts,.js}'],
  factories: ['./src/db/factory/*.factory{.ts,.js}'],
  cli: {
    migrationsDir: './src/db/migration'
  }
}
