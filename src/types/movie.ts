export type MovieType = {
    original_title: string,
    poster_path: string,
    release_date: string,
    id: number,
    genre_ids: number[]
}

type ProductionCompanyType = {
    id: number,
    logo_path: string, 
    name: string,
    origin_country: string,
}

export type movieDetailType = {
    original_title: string,
    poster_path: string,
    release_date: string,
    genres: GenreType[],
    budget: number,
    revenue: number,
    runtime: number,
    vote_average: number,
    vote_count: number,
    imdb_id: string,
    homepage: string,
    tagline: string,
    overview: string,
    production_companies: Partial<ProductionCompanyType>[]
}

export type AllMovieResponseType = {
    page: number,
    total_pages: number,
    total_results: number,
    results: MovieType[],
}

export type AllMoviesInputType = {
    page?: number,
    'primary_release_date.gte'?: string,
    'primary_release_date.lte'?: string
}
export type GenreType = {
    id: number,
    name: string
}
export type AllGenresResponseType = {
    genres: GenreType[]
}

export type CastType = {
    original_name: string,
    popularity: number
}

export type CastResponseType = {
    cast: CastType[]
}
