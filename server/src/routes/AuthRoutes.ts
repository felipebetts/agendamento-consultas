import { Application, Router } from "express";
import { AuthController } from "../controllers/AuthController";


const router = Router()

const authController = new AuthController()

router.post('/login', authController.login)

module.exports = (app: Application) => app.use('/auth', router)