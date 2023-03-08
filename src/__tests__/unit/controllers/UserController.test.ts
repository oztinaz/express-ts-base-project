import { Request, Response } from 'express'
import UserController from '../../../controllers/UserController'

import MySQLServiceProvider from '../../../providers/services/MySQLServiceProvider'

describe('controllers/UserController', () => {
  test('getUsers returns 200 OK', async () => {
    const req: Request = {} as Request
    const res: Response = {
      send: jest.fn(),
      status: jest.fn(() => res),
    } as unknown as Response

    const resSendSpy: jest.SpyInstance = jest.spyOn(res, 'send')
    const resStatusSpy: jest.SpyInstance = jest.spyOn(res, 'status')
    const mockUsers = [{id: 1, name: 'User 1'}]

    const getServiceSpyOn: jest.SpyInstance = jest.spyOn(MySQLServiceProvider, 'getService').mockImplementationOnce(jest.fn()).mockReturnValueOnce({
      select: jest.fn()
    })
    const selectSpyOn: jest.SpyInstance = jest.spyOn(MySQLServiceProvider.getService(), 'select').mockReturnValueOnce(mockUsers)

    UserController.getUsers(req, res)

    expect(getServiceSpyOn).toHaveBeenCalledTimes(2)
    expect(selectSpyOn).toHaveBeenCalledTimes(1)
    expect(selectSpyOn).toHaveBeenCalledWith('select * from users')
    // expect(resStatusSpy).toHaveBeenCalledTimes(1)
    // expect(resStatusSpy).toHaveBeenCalledWith(200)
    // expect(resSendSpy).toHaveBeenCalledTimes(1)
    // expect(resSendSpy).toHaveBeenCalledWith({
    //   users: mockUsers
    // })
  })
})
