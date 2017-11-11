import { injectable } from 'inversify';
import { MongoClient, Db, Collection } from 'mongodb';

@injectable()
export class MongoDriverService {

    private _connection;
    // TODO: inject configuration
    private URL = 'mongodb://localhost:27017/movie-app';

    constructor() {

    }


    async getCollection(name: string): Promise<Collection> {
        return this._getConnection().then((db: Db) => db.collection(name));
    }


    private _getConnection() {
        if (!this._connection) {
            this._connection = new Promise((resolve, reject) => {
                MongoClient.connect(this.URL, function (err, db) {

                    if (err) {
                        // logger.error('Error connection to mongo database!');
                        // logger.error(err);
                        reject(err);
                    }
                    resolve(db);
                });
            });
        }

        return this._connection;
    }

}