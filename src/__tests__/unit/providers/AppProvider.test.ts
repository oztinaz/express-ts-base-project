import AppProvider from '../../../providers/AppProvider'
import DotenvProvider from '../../../providers/DotenvProvider'
import ExpressProvider from '../../../providers/ExpressProvider'

describe('providers/AppProvider', () => {
  test('init calls other providers init methods', () => {
    const dotenvProviderInitSpy: jest.SpyInstance = jest
      .spyOn(DotenvProvider, 'init')
      .mockImplementationOnce(jest.fn())
    const expressProviderInitSpy: jest.SpyInstance = jest
      .spyOn(ExpressProvider, 'init')
      .mockImplementationOnce(jest.fn())
    AppProvider.init()
    expect(dotenvProviderInitSpy).toHaveBeenCalledTimes(1)
    expect(expressProviderInitSpy).toHaveBeenCalledTimes(1)
  })
})
