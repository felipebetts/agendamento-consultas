import { Router } from "express";
import { UserController } from "../controllers/UserController";


const routes = Router()

const userController = new UserController()

routes.get('/users', userController.getAllUsers)
routes.get('/users/:id', userController.getById)
routes.post('/users/create', userController.create)
routes.delete('/users/:id', userController.delete)

export { routes }