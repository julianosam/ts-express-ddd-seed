import { Movie } from "../domain/movie";
import { RentMovieCommand } from "./rent-movie-command";
import { RegisterMovieCommand } from "./register-movie-command";
import { injectable, inject } from "inversify";
import { logger } from "../utils/logger";
import { MovieRepository } from "../domain/movie-repository";

@injectable()
export class MovieStoreApplicationService {


    constructor(
        @inject('MovieRepository') private _movieRepo:MovieRepository
    ){}

    /**
     * User Story 001:
     * As a customer, I want to be able to rent a movie for the weekend.
     * 
     * @param movieRentalCmd - The command descriptor
     */
    rentMovie(movieRentalCmd: RentMovieCommand) : Promise<void> {

        logger.info('Renting movie!');
        logger.info(movieRentalCmd);


        return Promise.resolve();
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
