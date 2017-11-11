import { inject, injectable } from 'inversify';
import { Request, Response } from "express";
import { controller, httpPost, httpGet } from 'inversify-express-utils';
import * as HTTP_CODES from 'http-status-codes';
import { MovieStoreApplicationService } from '../../../application/movie-store-application-service';
import { RegisterMovieCommand } from '../../../application/register-movie-command';
import { RentMovieCommand } from '../../../application/rent-movie-command';
import { logger } from '../../../utils/logger';



@injectable()
@controller('/api')
export class MovieController {

    constructor(
        @inject('MovieStoreApplicationService') private _movieStoreAppSvc: MovieStoreApplicationService
    ) { }

    @httpGet('/movies/query')
    searchMovies(request: any, response: Response) {

    }

    @httpPost('/movies/commands/register')
    registerMovie(request: any, response: Response) {

        const movieRegCmd = new RegisterMovieCommand();
        movieRegCmd.requestDate = new Date();
        movieRegCmd.storeAdminId = request.headers['customer-id'];
        movieRegCmd.sectionName = request.body.sectionName;
        movieRegCmd.movie = request.body.movie;

        return this._movieStoreAppSvc.registerMovie(movieRegCmd).then((movie) => {
            response.send(movie);
        }).catch((err:Error) => {
            logger.error(err.message);
            logger.error(err.stack);
            
            response.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message)
        });
    }

    @httpPost('/movies/commands/rent')
    rentMovie(request: any, response: Response) {

        const movieRentCmd = new RentMovieCommand();
        movieRentCmd.customerId = request.headers['customer-id'];
        movieRentCmd.movieId = request.body.movieId;
        movieRentCmd.rentalDate = new Date();

        return this._movieStoreAppSvc.rentMovie(movieRentCmd).then((movie) => {
            response.send(movie);
        }).catch((err) => response.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err));
    }


}
