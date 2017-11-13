import { MovieRepository } from '../../../domain/movie-repository';
import { Movie } from '../../../domain/movie';
import { injectable, inject } from 'inversify';
import { TypeORMConnectionService } from './typeorm-connection-service';

@injectable()
export class TypeORMMovieRepository implements MovieRepository {

    constructor(
        @inject('TypeORMConnectionService') private _conn: TypeORMConnectionService
    ) { }

    async create(movie: Movie): Promise<Movie> {
        const repo = await this._repo();
        return repo.save(movie);
    }

    async list(query?: any): Promise<Movie[]> {
        const repo = await this._repo();
        return repo.find(query);
    }

    async findById(id: string): Promise<Movie> {
        const repo = await this._repo();
        return repo.findOneById(id, { relations: ['currentlyRentedBy'] });
    }

    async update(movie: Movie): Promise<Movie> {
        const repo = await this._repo();
        return repo.save(movie);
    }
    async delete(movieId: string): Promise<void> {
        const repo = await this._repo();
        return repo.deleteById(movieId);
    }

    private _repo() {
        return this._conn.getRepo<Movie>(Movie);
    }

}
