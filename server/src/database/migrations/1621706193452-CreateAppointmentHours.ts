import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AppointmentHours1621703032933 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointment_hours',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'is_booked',
                        type: 'boolean',
                        default: false,
                    },
                    {
                        name: 'starts_at',
                        type: 'timestamp'
                    },
                    {
                        name: 'ends_at',
                        type: 'timestamp'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointment_hours')
    }

}
