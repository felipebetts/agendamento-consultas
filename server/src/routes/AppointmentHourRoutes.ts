import { Router } from 'express'
import { AppointmentHourController } from '../controllers/AppointmentHourController'

const router = Router()

const appointmentHourController = new AppointmentHourController()

router.get('/', appointmentHourController.getAllAppointmentHours)
router.post('/', appointmentHourController.create)
router.delete('/:id', appointmentHourController.delete)

module.exports = app => app.use('/appointment_hours', router)