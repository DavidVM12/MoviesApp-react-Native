import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interface/movie-db.responses";
import { MoviePapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/popular');

        return nowPlaying.results.map(MoviePapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.error(error);
        throw new Error('Error fetching now playing movies');
    }

}