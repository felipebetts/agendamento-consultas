import { Request, Response } from "express";
import { AppointmentHourService } from "../services/AppointmentHourService";


export class AppointmentHourController {
    async create(req: Request, res: Response) {
        try {
            const {
                starts_at,
                ends_at,
                is_booked
            } = req.body

            const appointmentHourService = new AppointmentHourService()
            
            const appointmentHour = await appointmentHourService.create({
                starts_at,
                ends_at,
                is_booked
            })
            
            return res.json(appointmentHour)
        } catch (err) {
            console.log({ ...err })

            return res.status(500).json(err)
        }
    }
    
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            
            const appointmentHourService = new AppointmentHourService()
            
            const isAppointmentHourDeleted = await appointmentHourService.delete(id)
            
            return res.json(isAppointmentHourDeleted)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
    
    async getAllAppointmentHours(req: Request, res: Response) {
        try {
            const appointmentHourService = new AppointmentHourService()
            
            const appointmentHours = await appointmentHourService.getAllAppointmentHours()
            
            return res.json(appointmentHours)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
    
    async getById(req: Request, res: Response) {

        const { id } = req.params

        const appointmentHourService = new AppointmentHourService()
        
        const appointment = await appointmentHourService.getById(id)

        return res.json(appointment)
    }
    // async toggleIsBooked(req: Request, res: Response) {
    //     const { id } = req.body

    //     const appointmentHourService = new AppointmentHourService()
        
    //     const updatedAppointmentHour = await appointmentHourService.toggleIsBooked(id)

    //     console.log('updatedAppointmentHour: ', updatedAppointmentHour)

    //     return res.json(updatedAppointmentHour)
    // }
}