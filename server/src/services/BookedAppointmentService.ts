import { getCustomRepository, Repository } from "typeorm";
import { BookedAppointments } from "../entities/BookedAppointments";
import { AppointmentHoursRepository } from "../repositories/AppointmentHoursRepository";
import { BookedAppointmentsRepository } from "../repositories/BookedAppointments";
import { UsersRepository } from "../repositories/UsersRepository";


interface ICreateBookedAppointment {
    user_id: string
    appointment_id: string
}

export class BookedAppointmentService {
    private bookedAppointmentsRepository: Repository<BookedAppointments>

    constructor() {
        this.bookedAppointmentsRepository = getCustomRepository(BookedAppointmentsRepository)
    }

    async create({ user_id, appointment_id }: ICreateBookedAppointment) {

        // check if user exists:
        const usersRepository = getCustomRepository(UsersRepository)
        const userExists = await usersRepository.findOne(user_id)

        if (!userExists) {
            throw new Error("User doesn't exists");
        }

        // check if appointmentHour exists:
        const appointmentHoursRepository = getCustomRepository(AppointmentHoursRepository)
        const appointmentHourExists = await appointmentHoursRepository.findOne(appointment_id)

        if (!appointmentHourExists) {
            throw new Error("Appointment hour not available");
        }

        // check if hour already booked:
        const bookedAppointmentAlreadyExists = await this.bookedAppointmentsRepository.findOne({
            appointment_id
        })

        if (bookedAppointmentAlreadyExists) {
            throw new Error("Appointment hour already booked");
        }

        const bookedAppointment = await this.bookedAppointmentsRepository.create({
            user_id,
            appointment_id
        })

        await this.bookedAppointmentsRepository.save(bookedAppointment)

        return bookedAppointment
    }

    async delete(id: string) {
        // check if booked appointment exists:
        const bookedAppointmentExists = await this.bookedAppointmentsRepository.findOne(id)

        if (!bookedAppointmentExists) {
            throw new Error("Booked Appointment doesn't exists")
        }

        await this.bookedAppointmentsRepository.delete(id)

        return true
    }

    async getAll() {
        const bookedAppointments = await this.bookedAppointmentsRepository.find({})

        return bookedAppointments
    }
}