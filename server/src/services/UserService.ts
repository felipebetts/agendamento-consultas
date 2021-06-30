import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import bcrypt, { compare } from 'bcryptjs'
import { sign } from "jsonwebtoken";

interface ICreateUser {
    email: string,
    password: string,
    admin?: boolean
}



export class UserService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create({ email, password, admin }: ICreateUser) {


        // antes de criar um novo usuário precisamos verificar se já existe algum usuário cadastrado nesse email
        const userExists = await this.usersRepository.findOne({
            email
        })

        if (userExists) {
            // se já existir um usuário, retornar ele
            return userExists
        }

        //se não tiver vamos criar um:

        // primeiro criptografamos a senha:
        const salt = bcrypt.genSaltSync()
        const hashedPassword = bcrypt.hashSync(password, salt)

        // aqui criamos o usuário com a senha criptografada
        const user = this.usersRepository.create({
            email,
            password: hashedPassword,
            admin
        })

        // finalmente salvemos no banco de dados:
        await this.usersRepository.save(user)

        return user
    }

    async delete(id: string) {

        const userExists = await this.usersRepository.findOne(id)

        if (!userExists) {
            return {
                errors: [
                    {
                        message: 'Usuário informado não existe'
                    }
                ]
            }
        }

        await this.usersRepository.delete({
            id
        })

        return {
            message: 'Usuário deletado com sucesso!'
        }
    }

    async getAllUsers() {
        const users = await this.usersRepository.find({})

        return users
    }

    async getById(id: string) {
        const user = await this.usersRepository.findOne(id)

        return user
    }
}