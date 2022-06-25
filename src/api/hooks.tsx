import { AllMoviesInputType } from "@/types/movie";
import { useQuery } from "react-query";
import MoviesService, { findAllGeneresKey, findAllKey } from "./axios";


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