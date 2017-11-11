import { getRepository, createConnection } from "typeorm";
import { MovieRepository } from "../../domain/movie-repository";
import { Movie } from "../../domain/movie";
import { injectable } from "inversify";
import { logger } from "../../utils/logger";

@injectable()
export class TypeORMMovieRepository implements MovieRepository {

    private _conn;

    async create(movie: Movie): Promise<Movie> {
        const repo = await this._getRepo();
        return repo.save(movie);
    }

    async list(query?: any): Promise<Movie[]> {
        const repo = await this._getRepo();
        return repo.find(query);
    }
    async update(movie: Movie): Promise<Movie> {
        const repo = await this._getRepo();
        return repo.save(movie);
    }
    async delete(movieId: string): Promise<void> {
        const repo = await this._getRepo();
        return repo.deleteById(movieId);
    }

    private _getRepo() {

        if (this._conn) {
            return this._conn;
        } else {
            logger.info('Creating mongo connection pool...');

            return this._conn = createConnection({
                "type": "mongodb",
                "host": "localhost",
                "port": 27017,
                "database": "node_ts_seed",
                "entities": [Movie]
            }).then((conn) => conn.getMongoRepository(Movie));
        }
    }

}