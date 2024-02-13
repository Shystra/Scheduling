import { NextFunction, Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";

class UsersController {
    private usersServices: UsersServices;
    constructor(){
        this.usersServices = new UsersServices()
    }
    index(){
        // buscar todas
    }
    show(){
        // busca somente 1
    }

    store(req: Request, res: Response, next: NextFunction){
        // criação
        const { name, email, password } = req.body
        try{
            const result = this.usersServices.create({name, email, password})
            
            
            return res.status(201).json(result);

        } catch(error) {
            next(error)
        }
    }

    auth(){
        // autenticação de usuario
    }
}

export {UsersController};