import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"


interface ILogin {
    email: string,
    password: string,
}

export class AuthService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async login({ email, password }: ILogin) {


        // verificar se existe user com esse email
        const user = await this.usersRepository.findOne({
            email
        })

        if (!user) {
            // throw new Error('Email incorretos')
            throw new Error('Email e/ou senha incorretos')
        }

        // verificar se a senha está correta
        const passwordsMatch = await compare(password, user.password)

        if (!passwordsMatch) {
            // throw new Error('senha incorretos')
            throw new Error('Email e/ou senha incorretos')
        }

        // se correta, vamos gerar o token
        const token = sign({
            email: user.email
        }, '1cac96bba553f3a43ae8398df3f47118', {
            subject: user.id,
            expiresIn: '1d'
        })

        return token
    }
}