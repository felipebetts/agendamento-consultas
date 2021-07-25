import { Application, Router } from "express";
import { BookedAppointmentController } from "../controllers/BookedAppointmentController";


const router = Router()

const bookedAppointmentController = new BookedAppointmentController()

router.get('/', bookedAppointmentController.getAll)
router.post('/', bookedAppointmentController.create)
router.delete('/:id', bookedAppointmentController.delete)

module.exports = (app: Application) => app.use('/booked_appointments', router)