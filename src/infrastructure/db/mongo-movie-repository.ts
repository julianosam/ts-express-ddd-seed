import { injectable } from 'inversify';
import { ObjectId, Collection } from 'mongodb';
import { Movie } from '../../domain/movie';
import { MovieRepository } from '../../domain/movie-repository';
import { MongoDriverService } from './mongo-driver-service';

@injectable()
export class MongoMovieRepository implements MovieRepository {

  list(query?: any): Promise<Movie[]> {
    throw new Error("Method not implemented.");
  }
  update(movie: Movie): Promise<Movie> {
    throw new Error("Method not implemented.");
  }
  delete(movieId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  constructor(
    private _mongoDriver: MongoDriverService
  ) { }


  async create(movie: Movie): Promise<Movie> {
    const collection = await this._getMoviesCollection();
    return collection.insert(movie)
      .then((result) => {
        console.log(result);
        return collection.findOne({ _id: new ObjectId(result.insertedId) });
      });
  }



  private async _getMoviesCollection(): Promise<Collection<Movie>> {
    return this._mongoDriver.getCollection('movies');
  }



}
