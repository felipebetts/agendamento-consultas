import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'


@Entity('booked_appointments')
export class BookedAppointments {

    @PrimaryColumn()
    id: string

    @Column()
    user_id: string

    @Column()
    appointment_id: string

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