import { movieType } from "@/types/movie"
import styled from "@emotion/styled"
import CalendarIcon from "../assets/icons/CalendarIcon"
import { MText } from "../base/MText"
import { Spacer } from "../base/Spacer."
import { getFullImageUrl } from "../utils/ui"


const MovieCardContainer = styled.div(({ theme }: { theme?: ThemeObjectType }) => ({
  width: '100%',
  backgroundColor: theme?.palette.grey[100],
  height: 195,
  borderRadius: theme?.shape.borderRadius.common,
  padding: 5,
  display: 'grid',
  gridTemplateColumns: '40% 60%',
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



function MovieCard({ movie }: { movie: movieType }) {
  return (
    <MovieCardContainer>
      <MoviePoster src={getFullImageUrl(movie.poster_path)}/>
      <DetailSection>
        <MText fontWeight="bold" variant="h6">{movie.original_title}</MText>
        <MText style={{display: 'flex'}} variant="body3" ><CalendarIcon/>
        &nbsp;&nbsp;
        {movie.release_date}</MText>
        <MText fontWeight="bold" variant="caption">{movie.original_title}&#9679;</MText>
      </DetailSection>
    </MovieCardContainer>
  )
}

export default MovieCard