import { AppointmentHoursRepository } from './../repositories/AppointmentHoursRepository';
import { getCustomRepository, Repository } from "typeorm";
import { AppointmentHours } from "../entities/AppointmentHours";


interface ICreateAppointmentHour {
    starts_at: string
    ends_at: string
    is_booked?: boolean
}

export class AppointmentHourService {
    private appointmentHoursRepository: Repository<AppointmentHours>

    constructor() {
        this.appointmentHoursRepository = getCustomRepository(AppointmentHoursRepository)
    }

    async create({ starts_at, ends_at, is_booked }: ICreateAppointmentHour) {

        const appointmentHourAlreadyExists = await this.appointmentHoursRepository.findOne({
            starts_at: new Date(parseInt(starts_at)),
            ends_at: new Date(parseInt(ends_at)),
            is_booked,
        })

        if (appointmentHourAlreadyExists) {
            return appointmentHourAlreadyExists
        }

        const appointmentHour = this.appointmentHoursRepository.create({
            starts_at: new Date(parseInt(starts_at)),
            ends_at: new Date(parseInt(ends_at)),
            is_booked
        })

        await this.appointmentHoursRepository.save(appointmentHour)

        return appointmentHour
    }

    async delete(id: string) {
        const appointmentHourExists = await this.appointmentHoursRepository.findOne(id)

        if (!appointmentHourExists) {
            return {
                errors: [
                    {
                        message: 'Horário de consulta informado não existe'
                    }
                ]
            }
        }

        await this.appointmentHoursRepository.delete({
            id
        })

        return {
            message: 'Horário de consulta deletado com sucesso!'
        }
    }

    async getAllAppointmentHours() {
        const appointmentHours = await this.appointmentHoursRepository.find({})

        return appointmentHours
    }

    // async toggleIsBooked(id: string) {
    //     const appointmentHourExists = await this.appointmentHoursRepository.findOne(id)

    //     if (!appointmentHourExists) {
    //         throw new Error("Horário de consulta informado não existe")
    //     }
    
    //     const toggledAppointmentHour = {
    //         ...appointmentHourExists,
    //         is_booked: !appointmentHourExists.is_booked
    //     }

    //     const updatedAppointmentHour = await this.appointmentHoursRepository.save({...toggledAppointmentHour})

    //     return updatedAppointmentHour
    // }
}