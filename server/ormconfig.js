module.exports = {
  type: 'mysql',
  host: 'localhost',
  // port: 3306,
  username: 'root',
  password: 'pass',
  database: 'app-db',
  synchronize: true,
  entities: ['dist/db/entity/{*.ts,.js}'],
  migrations: ['dist/db/migration/{*.ts,.js}'],
  cli: {
    entitiesDir: 'dist/db/entity',
    migrationDir: 'dist/db/migration'
  }
}
