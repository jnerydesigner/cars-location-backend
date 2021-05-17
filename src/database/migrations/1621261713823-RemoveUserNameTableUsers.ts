/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class RemoveUserNameTableUsers1621261713823
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username");
    }

    // eslint-disable-next-line prettier/prettier
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "username",
                type: "varchar",
            })
        );
    }
}
