import { NextFunction, Request, Response } from "express";

export const likeGet = (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        console.log(error),
        next(error)
    }
}