import { Request, Response } from 'express'

class HealthController {
  public async health(req: Request, res: Response): Promise<Response> {
    return res.status(200).send('OK')
  }
}

export default new HealthController()
