import { Router } from 'express';
import { AppointmentHourController } from '../controllers/AppointmentHourController';
import { AuthController } from '../controllers/AuthController';
import { UserController } from '../controllers/UserController';
import { Application } from "express"

module.exports = (app: Application) => {
    require('./UserRoutes')(app)
    require('./AppointmentHourRoutes')(app)
    require('./AuthRoutes')(app)
    require('./BookedAppointmentRoutes')(app)
}

// const router = Router()

// const appointmentHourController = new AppointmentHourController()
// const authController = new AuthController()
// const userController = new UserController()

// router.get('/users/', userController.getAllUsers)
// router.get('/users/:id', userController.getById)
// router.post('/users/', userController.create)
// router.delete('/users/:id', userController.delete)

// router.post('/login', authController.login)

// router.get('/appointment_hours/', appointmentHourController.getAllAppointmentHours)
// router.post('/appointment_hours/', appointmentHourController.create)
// router.delete('/appointment_hours/:id', appointmentHourController.delete)

// export { router }