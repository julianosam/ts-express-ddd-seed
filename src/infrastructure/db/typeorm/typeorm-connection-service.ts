import { injectable } from 'inversify';
import { createConnection, MongoRepository, Connection, Repository } from 'typeorm';
import { logger } from '../../../utils/logger';
import { Movie } from '../../../domain/movie';
import { Customer } from '../../../domain/customer';

@injectable()
export class TypeORMConnectionService {

    private _conn;

    getRepo<T>(target: string | (new () => {})): Promise<Repository<T>> {
        return this._getConn().then((conn) => conn.getRepository<T>(target));
    }

    private _getConn(): Promise<Connection> {

        if (this._conn) {
            return this._conn;
        } else {
            logger.info('Creating mongo connection pool...');

            return this._conn = createConnection({
                // type: 'mongodb',
                // host: 'localhost',
                // port: 27017,
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'my-secret-pw',
                synchronize: true,
                logging: false,
                database: 'node_ts_seed',
                entities: [Movie, Customer]
            });
        }
    }
}
