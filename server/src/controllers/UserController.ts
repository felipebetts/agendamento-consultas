import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {
    async create(req: Request, res: Response) {

        try {
            const { email, password, admin } = req.body

            const userService = new UserService()
    
            const user = await userService.create({
                email,
                password,
                admin
            })
    
            return res.json(user)
        } catch (err) {
            return res.status(500).json(err)
        }

    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const userService = new UserService()

            const usersBeenDeleted = await userService.delete(id)

            // if (usersBeenDeleted) {
                return res.json(usersBeenDeleted)
            // }
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const userService = new UserService()

            const users = await userService.getAllUsers()

            return res.json(users)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {

            const { id } = req.params

            const userService = new UserService()

            const user = await userService.getById(id)

            return res.json(user)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
}