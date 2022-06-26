import { GenreType, MovieType } from "@/types/movie"
import styled from "@emotion/styled"
import CalendarIcon from "../assets/icons/CalendarIcon"
import { MText } from "../base/MText"
import Link from 'next/link'
import { getFullImageUrl } from "../utils/ui"
import { memo } from "react"


const MovieCardContainer = styled.div(({ theme }: { theme?: ThemeObjectType }) => ({
  width: '100%',
  backgroundColor: theme?.palette.grey[100],
  height: 195,
  borderRadius: theme?.shape.borderRadius.common,
  padding: 5,
  display: 'grid',
  overflow: 'hidden',
  gridTemplateColumns: '40% 60%',
  cursor: 'pointer'
}))

const MoviePoster = styled.img(({ theme }: { theme?: ThemeObjectType }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: `${theme?.shape.borderRadius.common}px 0 0 ${theme?.shape.borderRadius.common}px`,
}))

const DetailSection = styled.div(({ theme }: { theme?: ThemeObjectType }) => ({
  width: '100%',
  height: '100%',
  padding: 5,
  display: 'grid',
  gridTemplateRows: '60% 20% 20%',
}))

const getGenresString = (genresArray: GenreType[], genre_ids: number[]) => {
  try {
    const filteredGenres = genresArray.filter(item => genre_ids.includes(item.id))
    const genresName = filteredGenres.map(item => item.name)
    let output = ''
    genresName.forEach((item, key) => {
      if (key == 0) {
        output += `${item}`
      } else {
        output += `, ${item}`
      }
    })
    return output
  } catch {
    return ''
  }
}

const MovieCard = ({ movie, genresData = [] }: { movie: MovieType, genresData?: GenreType[] }) => {
  return (
    <Link href={`/${movie.id}`}>
      <MovieCardContainer>
        <MoviePoster alt="no poster" src={getFullImageUrl(movie.poster_path)} />
        <DetailSection>
          <MText style={{ overflow: 'hidden' }} fontWeight="bold" variant="body1">{movie.original_title}</MText>
          <MText style={{ display: 'flex' }} variant="body3" ><CalendarIcon />
            &nbsp;&nbsp;
            {movie.release_date}</MText>
          <MText style={{ overflow: 'hidden' }} fontWeight="bold" variant="caption">{getGenresString(genresData, movie.genre_ids)}</MText>
        </DetailSection>
      </MovieCardContainer>
    </Link>
  )
}

export default MovieCard