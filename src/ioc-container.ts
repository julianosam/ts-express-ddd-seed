import 'reflect-metadata';
import { interfaces, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import { TypeORMMovieRepository } from './infrastructure/db/typeorm/typeorm-movie-repository';
import { MovieRepository } from './domain/movie-repository';
import { TypeORMConnectionService } from './infrastructure/db/typeorm/typeorm-connection-service';
import { CustomerRepository } from './domain/customer-repository';
import { TypeORMCustomerRepository } from './infrastructure/db/typeorm/typeorm-customer-repository';
import { CustomerApplicationService } from './application/customer/customer-application-service';
import { MovieStoreApplicationService } from './application/movie/movie-store-application-service';
import { MovieController } from './presentation/rest/movie.controller';
import { CustomerController } from './presentation/rest/customer-controller';

const container = new Container();

// Customer
container.bind<interfaces.Controller>(TYPE.Controller).to(CustomerController).inSingletonScope().whenTargetNamed('CustomerController');
container.bind<CustomerApplicationService>('CustomerApplicationService').to(CustomerApplicationService).inSingletonScope();
container.bind<CustomerRepository>('CustomerRepository').to(TypeORMCustomerRepository).inSingletonScope();

// Movies
container.bind<interfaces.Controller>(TYPE.Controller).to(MovieController).inSingletonScope().whenTargetNamed('MovieController');
container.bind<MovieStoreApplicationService>('MovieStoreApplicationService').to(MovieStoreApplicationService).inSingletonScope();
container.bind<MovieRepository>('MovieRepository').to(TypeORMMovieRepository).inSingletonScope();

// Database
container.bind<TypeORMConnectionService>('TypeORMConnectionService').to(TypeORMConnectionService).inSingletonScope();

export {
  container
};
