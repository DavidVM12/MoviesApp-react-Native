import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interface/movie-db.responses";
import { MoviePapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

        return topRated.results.map(MoviePapper.fromMovieDBResultToEntity);
        
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching movies - Toprated');
    }

}