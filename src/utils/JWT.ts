import jwt from "jsonwebtoken"
import { secretKey } from "../config/config"

export default {
    sing: (payload: string) => jwt.sign(payload, secretKey),
    verify: (token: string) => jwt.verify(token, secretKey)
}