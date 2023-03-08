import { PoolConfig } from "mysql";
import MySQLService from 'aaa/dist/services/MySQLService'

class MySQLServiceFactory {

    public static create(configuration: PoolConfig): MySQLService {
        return new MySQLService(configuration)
    }
}

export default MySQLServiceFactory