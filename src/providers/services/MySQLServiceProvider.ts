import IServiceProvider from '../../interfaces/providers/services/IServiceProvider'
import { IMySQLService } from 'aaa/dist/interfaces/IMySQLService'
import MySQLServiceFactory from '../../factories/MySQLServiceFactory'
import { PoolConfig } from 'mysql'

class MySQLServiceProvider implements IServiceProvider<IMySQLService> {

    private service: IMySQLService

    public init(): void {
        this.service = MySQLServiceFactory.create(this.configuration())
    }

    public getService(): IMySQLService {
        return this.service
    }

    private configuration(): PoolConfig {
        return {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        }
    }
}

export default new MySQLServiceProvider