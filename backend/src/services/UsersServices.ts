import { hash } from "bcrypt"
import { ICreate } from "../interface/UsersInterface"
import { UsersRepository } from "../repositories/UsersRepositories"

class UsersServices {
    private usersRepository: UsersRepository
    constructor(){
        this.usersRepository = new UsersRepository()
    }
    
    
    async create({ name, email, password}: ICreate){
        const findUser = await this.usersRepository.findUserByEmail(email)
        if(findUser){
            return new Error('User Exists')
        }

        const hashPassword = await hash(password, 10)
        const create =  this.usersRepository.create({ name, email, password: hashPassword, })
        return create;

    }
}

export { UsersServices }