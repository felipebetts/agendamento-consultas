import { Application, Router } from 'express'
import { AppointmentHourController } from '../controllers/AppointmentHourController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuth } from '../middlewares/ensureAuth'

const router = Router()

const appointmentHourController = new AppointmentHourController()

router.get('/', appointmentHourController.getAllAppointmentHours)
router.get('/:id', appointmentHourController.getById)
router.post('/', ensureAuth, ensureAdmin, appointmentHourController.create)
router.delete('/:id', appointmentHourController.delete)

// router.put('/book', appointmentHourController.toggleIsBooked)

module.exports = (app: Application) => app.use('/appointment_hours', router)