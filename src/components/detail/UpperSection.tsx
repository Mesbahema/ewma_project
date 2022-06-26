import { GenreType, movieDetailType, MovieType } from "@/types/movie";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { MText } from "../base/MText";
import { toPriceFormat, toTitleCase } from "../utils/regex";
import { getFullImageUrl, getImdbLink } from "../utils/ui";

const UpperSectionContainer = styled.div({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '30% 70%',
    justifyContent: 'space-between',
    height: 495
});

const MoviePoster = styled.img(({ theme }: { theme?: ThemeObjectType }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: theme?.shape.borderRadius.large,
}))
const DetailSection = styled.div(({ theme }: { theme?: ThemeObjectType }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: 70,
}))

const stringifyGenres = (genres: GenreType[]) => {
    try {
        let output = ''
        genres.forEach((item, key) => {
            if (key === 0) {
                output += item.name
            } else {
                output += `, ${item.name}`
            }
        })
        return output
    }
    catch {
        return ''
    }
}

const UpperSection = ({ movie }: { movie: Partial<movieDetailType> }) => {
    return (
        <UpperSectionContainer>
            <MoviePoster alt="no poster" src={getFullImageUrl(movie?.poster_path)} />
            <DetailSection>
                <DetailRow subject={'Budget'} value={toPriceFormat(movie?.budget)} />
                <DetailRow subject={'Revenue'} value={toPriceFormat(movie?.revenue)} />
                <DetailRow subject={'Release Date'} value={movie?.release_date} />
                <DetailRow subject={'Run time'} value={`${movie?.runtime} minutes`} />
                <DetailRow subject={'Scores'} value={`${movie?.vote_average} (${movie?.vote_count} votes)`} />
                <DetailRow subject={'Genres'} value={stringifyGenres(movie?.genres as GenreType[])} />
                <DetailRow subject={'IMDB Link'} href={getImdbLink(movie?.imdb_id)} />
                <DetailRow subject={'Homepage Link'} href={movie?.homepage} />
            </DetailSection>
        </UpperSectionContainer>
    )
}

const DetailRowContainer = styled.div({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '10px 0'
});
const DetailRow = ({
    subject,
    value,
    href
}: {
    subject?: string
    value?: string,
    href?: string
}) => {
    return (
        <DetailRowContainer>
            <MText variant="h6" fontWeight="bold">{subject}</MText>
            {value && (<MText variant="h6">{value}</MText>)}
            {href && (<MText variant="h6"><a rel="noreferrer" href={href} target="_blank" >Link</a></MText>)}
        </DetailRowContainer>
    )
}

export default UpperSection

