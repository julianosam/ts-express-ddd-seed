import { Movie } from '../domain/movie';
import { RentMovieCommand } from './rent-movie-command';
import { RegisterMovieCommand } from './register-movie-command';
import { injectable, inject } from 'inversify';
import { logger } from '../utils/logger';
import { MovieRepository } from '../domain/movie-repository';
import { Customer } from '../domain/customer';
import { CustomerRepository } from '../domain/customer-repository';

@injectable()
export class MovieStoreApplicationService {

    constructor(
        @inject('MovieRepository') private _movieRepo: MovieRepository,
        @inject('CustomerRepository') private _customerRepo: CustomerRepository
    ) { }

    /**
     * User Story 001:
     * As a customer, I want to be able to rent a movie for the weekend.
     *
     * @param movieRentalCmd - The command descriptor
     */
    rentMovie(movieRentalCmd: RentMovieCommand): Promise<Movie> {

        logger.info('Renting movie!');
        logger.info(movieRentalCmd);

        return Promise.all([
            this._customerRepo.findById(movieRentalCmd.customerId),
            this._movieRepo.findById(movieRentalCmd.movieId)
        ]).then((values) => {
            const customer: Customer = values[0];
            const movie: Movie = values[1];

            logger.info(customer);
            logger.info(movie);

            movie.rentTo(customer);

            return this._movieRepo.update(movie);
        });

    }

    /**
     * User Story 002:
     * As a store admin, I want to register a new movie to the store catalog
     *
     * @param movieRegCmd - The command descriptor
     */
    registerMovie(movieRegCmd: RegisterMovieCommand): Promise<Movie> {

        logger.info('Registering movie!');
        logger.info(movieRegCmd);

        const movie = new Movie(movieRegCmd.movie.name);
        return this._movieRepo.create(movie);

    }

}
