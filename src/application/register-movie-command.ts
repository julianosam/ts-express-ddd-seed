import { Movie } from "../domain/movie";

export class RegisterMovieCommand {
    storeAdminId: string;
    requestDate: Date;
    sectionName: string;
    movie: Movie;
}