import { AllMoviesInputType } from "@/types/movie";
import { useQuery } from "react-query";
import MoviesService, { findAllGeneresKey, findAllKey, findByIdKey, findCreditsKey } from "./axios";


export function useGetAllMovies(
    props : AllMoviesInputType
) {
    return useQuery(
        findAllKey
        ,
        () => MoviesService.findAll(props),
        { keepPreviousData: true }
    );
}
export function useGetAllGenres() {
    return useQuery(
        findAllGeneresKey
        ,
        () => MoviesService.findAllGeneres(),
        { keepPreviousData: true }
    );
}
export function useGetMovie({id}: {id?: string}) {
    return useQuery(
        findByIdKey + id
        ,
        () => MoviesService.findById(id),
        { keepPreviousData: true }
    );
}
export function useGetMovieCredit({id}: {id?: string}) {
    return useQuery(
        findCreditsKey + id
        ,
        () => MoviesService.findCredits(id),
        { keepPreviousData: true }
    );
}