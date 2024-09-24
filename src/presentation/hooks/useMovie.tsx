import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity'
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovie = () => {

    const [isLoagind, setIsLoagind] = useState(true);

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad();

    }, [])

    const initialLoad = async () => {

        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.popularUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpComingUseCase(movieDBFetcher);

        const [
            nowPlayingMovies, 
            popularMovies, 
            topRatedMovies, 
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setIsLoagind(false);


    };




    return {
        isLoagind,
        nowPlaying,
        popular,
        topRated,
        upcoming
    

    }
}
