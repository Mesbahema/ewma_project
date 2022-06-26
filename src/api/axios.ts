import { AllGenresResponseType, AllMovieResponseType, AllMoviesInputType, CastResponseType, GenreType, movieDetailType, MovieType } from "@/types/movie";
import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    api_key: process.env.API_KEY
}
});
export const findAllKey = 'discover/movie'
const findAll = async (props : AllMoviesInputType) => {
  const response = await apiClient.get<AllMovieResponseType>(`/${findAllKey}?page=${props.page}&primary_release_date.gte=${props['primary_release_date.gte']}&primary_release_date.lte=${props['primary_release_date.lte']}`);
  return response.data;
}
export const findAllGeneresKey = 'genre/movie/list'
const findAllGeneres = async () => {
  const response = await apiClient.get<AllGenresResponseType>(`/${findAllGeneresKey}`);
  return response.data;
}

export const findByIdKey = 'movie/'
const findById = async (id?: string) => {
  const response = await apiClient.get<movieDetailType>(`/${findByIdKey}/${id}`);
  return response.data;
}
export const  findCreditsKey = '/credits'
const findCredits = async (id?: string) => {
  const response = await apiClient.get<CastResponseType>(`/movie/${id}/credits`);
  return response.data;
}
const MoviesService = {
  findAll,
  findById,
  findAllGeneres,
  findCredits
}
export default MoviesService;