import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'


@Entity('appointment_hours')
export class AppointmentHours {

    @PrimaryColumn()
    id: string

    @Column()
    is_booked: boolean

    @CreateDateColumn()
    starts_at: Date

    @CreateDateColumn()
    ends_at: Date

    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date

    constructor() {
        // o constructor será chamado toda vex que for criada um instancia dessa classe (ex: new Setting)
        // Queremos popular o campo de id dentro do servidor, então vamos criar essa condicao:
        if (!this.id) {
            // se nao houver id ao inserir um dado, o id será gerado aqui pelo uuid v4
            this.id = uuid()
        }
    }
}