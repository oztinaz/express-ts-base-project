import express, { Application } from 'express'
import apiRouter from '../routes/Api'

class ExpressProvider {
  private express: Application

  constructor() {
    this.express = express()

    this.useJson()
    this.useRoutes()
  }

  public init(): void {
    const port: number = this.getPort()
    this.listen(port)
  }

  private useJson(): void {
    this.express.use(express.json())
  }

  private useRoutes(): void {
    this.express.use(apiRouter)
  }

  private getPort(): number {
    return parseInt(process.env.PORT || '3000')
  }

  private listen(port: number): void {
    this.express.listen(port, () => {
      console.log(
        '\x1b[33m%s\x1b[0m',
        `Server :: Running @ 'http://localhost:${port}'`
      )
    })
  }
}

export default new ExpressProvider()
