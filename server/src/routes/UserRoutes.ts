import { Application, Router } from "express";
import { UserController } from "../controllers/UserController";


const router = Router()

const userController = new UserController()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getById)
router.post('/', userController.create)
router.delete('/:id', userController.delete)

// export { router }

module.exports = (app: Application) => app.use('/users', router)