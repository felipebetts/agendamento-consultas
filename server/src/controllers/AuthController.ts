import { Request, Response } from "express"
import { AuthService } from "../services/AuthService"
import { UserService } from "../services/UserService"


export class AuthController {
    async login(req: Request, res: Response) {
        const {
            email,
            password
        } = req.body

        const authService = new AuthService()

        const token = await authService.login({
            email,
            password
        })

        return res.json(token)
    }
}