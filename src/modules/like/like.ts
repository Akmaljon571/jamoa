<<<<<<< HEAD
import { NextFunction, Request, Response } from "express"
import { allLikes } from "./model";

export const likeGet = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const likes = await allLikes()
        if (likes) {
            res.json({
                data: likes,
                status: 200
            })
        }
    } catch (error) {
        console.log(error);
=======
import { NextFunction, Request, Response } from "express";

export const likeGet = (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        console.log(error),
>>>>>>> 15c715668c5d94226e3a7029e59cab66dd30e934
        next(error)
    }
}