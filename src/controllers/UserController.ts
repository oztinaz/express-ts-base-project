import { Request, Response } from "express"
import MySQLServiceProvider from "../providers/services/MySQLServiceProvider"

class UserController {

    public async getUsers(req: Request, res: Response): Promise<Response> {
        const users = await MySQLServiceProvider.getService().select('select * from users')
        return res.status(200).send({
            users: users
        })
    }
}

export default new UserController