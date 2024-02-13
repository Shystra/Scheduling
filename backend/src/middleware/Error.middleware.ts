import { NextFunction, Request, Response } from "express";
import { HttpException } from "../interface/HttpException";


export function ErrorMiddleware( err: HttpException, request: Request, response: Response, next: NextFunction){
    const status: number = err.status ?? 500;
    const message: string = err.message ?? 'Internal Server Error';

    response.status(status).json({
        status,
        message
    })
}











// app.use((err:Error, request: Request, response: Response, next: NextFunction) => {
//     if(err instanceof Error){
//         return response.status(400).json({
//             message: err.message,
//         });
//     }
//     return response.status(500).json({
//         message: 'Internal Server Error'
//     })
// })