import 'reflect-metadata';
import { interfaces, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import { TypeORMMovieRepository } from './infrastructure/db/typeorm-movie-repository';
import { MovieRepository } from './domain/movie-repository';
import { MovieController } from './presentation/rest/movie/movie.controller';
import { MovieStoreApplicationService } from './application/movie-store-application-service';

// Types

let TYPES = {
  MovieRepository: 'MovieRepository'
};


const container = new Container();


// Movies
container.bind<interfaces.Controller>(TYPE.Controller).to(MovieController).inSingletonScope().whenTargetNamed('MovieController');
container.bind<MovieStoreApplicationService>('MovieStoreApplicationService').to(MovieStoreApplicationService).inSingletonScope();
container.bind<MovieRepository>('MovieRepository').to(TypeORMMovieRepository).inSingletonScope();




export {
  container,
  TYPES
};
