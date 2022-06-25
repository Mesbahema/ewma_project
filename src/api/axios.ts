import { AllGenresResponseType, AllMovieResponseType, AllMoviesInputType, GenreType, MovieType } from "@/types/movie";
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
  const response = await apiClient.get<AllMovieResponseType>(`/${findAllKey}?page=${props.page}`);
  return response.data;
}
export const findAllGeneresKey = 'genre/movie/list'
const findAllGeneres = async () => {
  const response = await apiClient.get<AllGenresResponseType>(`/${findAllGeneresKey}`);
  return response.data;
}
const findById = async (id: any) => {
  const response = await apiClient.get<MovieType>(`/movieTypes/${id}`);
  return response.data;
}
const findByTitle = async (title: string) => {
  const response = await apiClient.get<MovieType[]>(`/movieTypes?title=${title}`);
  return response.data;
}
const MoviesService = {
  findAll,
  findById,
  findByTitle,
  findAllGeneres
}
export default MoviesService;