import { BookedAppointments } from './../entities/BookedAppointments';
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(BookedAppointments)
export class BookedAppointmentsRepository extends Repository<BookedAppointments> {}