import styled from '@emotion/styled';
import React from 'react'
import { MText } from '../base/MText'
import { Spacer } from '../base/Spacer.'
import MovieCard from './MovieCard';
import { movieData } from './movieData';

const HomeComponentContainer = styled.div({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fill, 25%)',
    justifyContent: 'space-between',
    gridGap: 35,
});
const HomeComponent = () => {
  return (
    <>
        <Spacer vert={119}/>
        <HomeComponentContainer>
            {
                movieData.map((item, key) => <MovieCard key={key} movie={item}/>)
            }
        </HomeComponentContainer>
        <MText variant='h1' palette='secondary'>this is the text</MText>
        </>
  )
}

export default HomeComponent