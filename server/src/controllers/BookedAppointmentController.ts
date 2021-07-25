import { Request, Response } from "express";
import { BookedAppointmentService } from "../services/BookedAppointmentService";


export class BookedAppointmentController {
    async create(req: Request, res:Response) {
        const { user_id, appointment_id } = req.body

        const bookedAppointmentService = new BookedAppointmentService()
        
        const bookedAppointment = await bookedAppointmentService.create({
            user_id,
            appointment_id
        })
        
        console.log("bookedAppointment: ", bookedAppointment)
        
        return res.json(bookedAppointment)
    }
    
    async delete(req: Request, res: Response) {
        const { id } = req.params
        
        const bookedAppointmentService = new BookedAppointmentService()
        
        const deleteBookedAppointment = await bookedAppointmentService.delete(id)
        
        return res.json(deleteBookedAppointment)
    }
    
    async getAll(req: Request, res: Response) {
        const bookedAppointmentService = new BookedAppointmentService()
        
        const bookedAppointments = await bookedAppointmentService.getAll()

        return res.json(bookedAppointments)
    }
}