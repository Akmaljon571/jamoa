import { Request, Response, NextFunction } from "express"
import { ALL_LIKES } from "./model"
import JWT from "../../utils/JWT"
import postgres from "../../utils/postgres"

export const getUserLikes = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token } = req.headers
        if (typeof auth_token === 'string') {

            const userId = JWT.verify(auth_token)

            if (typeof userId === 'string') {
               const likes = await postgres.fetchAll(ALL_LIKES, userId)
            }

        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}