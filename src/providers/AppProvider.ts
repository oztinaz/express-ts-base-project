import DotenvProvider from './DotenvProvider'
import ExpressProvider from './ExpressProvider'

class AppProvider {
  public init(): void {
    DotenvProvider.init()
    ExpressProvider.init()
  }
}

export default new AppProvider()
