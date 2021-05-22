import { EntityRepository, Repository } from "typeorm";
import { AppointmentHours } from "../entities/AppointmentHours";


@EntityRepository(AppointmentHours)
export class AppointmentHoursRepository extends Repository<AppointmentHours> {}