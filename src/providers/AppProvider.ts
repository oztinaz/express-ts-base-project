import IProvider from '../interfaces/providers/IProvider'
import DotenvProvider from './DotenvProvider'
import ExpressProvider from './ExpressProvider'
import MySQLServiceProvider from './services/MySQLServiceProvider'

class AppProvider implements IProvider {
  public init(): void {
    DotenvProvider.init()
    MySQLServiceProvider.init()
    ExpressProvider.init()
  }
}

export default new AppProvider()
