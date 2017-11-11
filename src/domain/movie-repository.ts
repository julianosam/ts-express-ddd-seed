import { Movie } from './movie';

export interface MovieRepository {

    create(movie: Movie): Promise<Movie>;
    list(query?: any): Promise<Movie[]>;
    update(movie: Movie): Promise<Movie>;
    delete(movieId: string): Promise<void>;

}
