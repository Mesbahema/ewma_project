export type movieType = {
    original_title: string,
    poster_path: string,
    release_date: string,
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
    genre_ids: number[],
    budget: number,
    revenue: number,
    runtime: number,
    vote_average: number,
    vote_count: number,
    imdb_id: string,
    homepage: string,
    overview: string,
    production_companies: Partial<ProductionCompanyType>[]
}