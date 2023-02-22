import dotenv from 'dotenv'
import DotenvProvider from '../../../providers/DotenvProvider'

describe('providers/DotenvProvider', () => {
  test('init calls dotenv.config', () => {
    const dotenvConfigSpy: jest.SpyInstance = jest
      .spyOn(dotenv, 'config')
      .mockImplementationOnce(jest.fn())
    DotenvProvider.init()
    expect(dotenvConfigSpy).toHaveBeenCalledTimes(1)
  })
})
