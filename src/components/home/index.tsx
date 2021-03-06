import { DataContext } from '@/provider/StateProvider';
import styled from '@emotion/styled';
import React, { useContext, useEffect } from 'react'
import { useGetAllGenres, useGetAllMovies } from 'src/api/hooks';
import { Spacer } from '../base/Spacer.'
import { AppLoadingPage } from '../base/loader/loadingPage';
import FilterComponent from './FilterComponent';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const HomeComponentContainer = styled.div({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fill, 25%)',
    justifyContent: 'space-between',
    gridGap: 35,
});
const HomeComponent = () => {
    const { state, dispatch } = useContext(DataContext)

    const { page, dateRange } = state

    const { data, refetch, isLoading, isRefetching } = useGetAllMovies({
        page,
        'primary_release_date.gte': dateRange[0],
        'primary_release_date.lte': dateRange[1]
    })

    const { data: genresData,  isLoading: genresIsLoading} = useGetAllGenres()

    useEffect(() => {
        refetch()
    }, [page, dateRange])
    useEffect(() => {
        dispatch({ type: 'SET_NAV_COMPONENT', payload: {Component: FilterComponent} })
    }, [])
    console.log(isLoading, isRefetching)
    return (
        <>
            <AppLoadingPage isLoading={isLoading || genresIsLoading || isRefetching}/>
            <Spacer vert={119} />
            <HomeComponentContainer>
                {data &&
                    data.results.map((item, key) => <MovieCard genresData={genresData?.genres} key={key} movie={item} />)
                }
            </HomeComponentContainer>
            <Spacer vert={161} />
            <Pagination totalPage={data?.total_pages} totalResults={data?.total_results} />
        </>
    )
}

export default HomeComponent