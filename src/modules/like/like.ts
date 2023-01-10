import { Request, Response, NextFunction } from "express"
import { ALL_LIKES, CREATE_LIKE, DELETE_Like } from "./model"
import JWT from "../../utils/JWT"
import postgres from "../../utils/postgres"

export const getUserLikes = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token } = req.headers
        if (typeof auth_token === 'string') {

            const userId = JWT.verify(auth_token)

            if (typeof userId === 'string') {
               const likes = await postgres.fetchAll(ALL_LIKES, userId)
               return res.json({
                data: likes,
                status: 200
               })
            }

        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const Create_like = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token, productId } = req.body
        if (typeof auth_token === 'string') {

            const userId = JWT.verify(auth_token)

            if (typeof userId === 'string') {
               const newLike = await postgres.fetchOne(CREATE_LIKE, userId, productId)
               return res.json({
                status: 201,
                data: newLike
               })
            }

        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const DELETE_LIKE = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { likeId } = req.params
        console.log(likeId);
        
            if (typeof likeId === 'string') {
               const deleteLike = await postgres.fetchOne(DELETE_Like, likeId)
               return res.status(202).json({
                status: 202,
                message: "Deleted succesfully"
               })
            }

    } catch (error) {
        console.log(error);
        next(error)
    }
}