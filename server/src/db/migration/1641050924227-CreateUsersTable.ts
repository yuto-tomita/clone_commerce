import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsersTable1641050924227
  implements MigrationInterface
{
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    // await queryRunner.createTable(
    //   new Table({
    //     name: 'users',
    //     columns: [
    //       {
    //         name: 'id',
    //         // type: 'varchar',
    //         type: 'number',
    //         isPrimary: true
    //         // generationStrategy: 'uuid'
    //       },
    //       {
    //         name: 'name',
    //         type: 'string',
    //         isNullable: false
    //       },
    //       {
    //         name: 'product_id',
    //         type: 'number',
    //         isPrimary: false
    //       }
    //     ]
    //   }),
    //   true
    // )
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('users')
  }
}
