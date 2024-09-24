import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interface/movie-db.responses";
import { MoviePapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesUpComingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return upcoming.results.map(MoviePapper.fromMovieDBResultToEntity);
        
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching movies - upcoming');
    }

}