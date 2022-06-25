import { movieDetailType, MovieType } from "@/types/movie";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { MText } from "../base/MText";
import { toPriceFormat, toTitleCase } from "../utils/regex";
import { getFullImageUrl } from "../utils/ui";

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

const UpperSection = ({ movie }: { movie: Partial<movieDetailType> }) => {
    return (
        <UpperSectionContainer>
            <MoviePoster src={getFullImageUrl(movie.poster_path)} />
            <DetailSection>
                <DetailRow subject={'Budget'} value={toPriceFormat(movie.budget)} />
                <DetailRow subject={'Revenue'} value={toPriceFormat(movie.revenue)} />
                <DetailRow subject={'Release Date'} value={movie.release_date} />
                <DetailRow subject={'Run time'} value={`${movie.runtime}`} />
                <DetailRow subject={'Scores'} value={`${movie.vote_average} (${movie.vote_count} votes)`} />
                <DetailRow subject={'Genres'} value={'1,2,3'} />
                <DetailRow subject={'IMDB Link'} value={movie.imdb_id} />
                <DetailRow subject={'Homepage Link'} value={movie.homepage} />
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
    Component
}: {
    subject?: string
    value?: string,
    Component?: React.FC<{ active?: boolean }>
}) => {
    console.log('subject', subject)
    return (
        <DetailRowContainer>
            <MText variant="h6" fontWeight="bold">{subject}</MText>
            {value && (<MText variant="h6">{value}</MText>)}
            {Component && (<Component />)}
        </DetailRowContainer>
    )
}

export default UpperSection

