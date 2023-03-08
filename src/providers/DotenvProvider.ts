import dotenv from 'dotenv'
import IProvider from '../interfaces/providers/IProvider'

class DotenvProvider implements IProvider {
  public init(): void {
    dotenv.config()
  }
}

export default new DotenvProvider()
