import { movieDetailType } from '@/types/movie';
import styled from '@emotion/styled';
import { Spacer } from '../base/Spacer.';
import { movieData } from '../home/movieData';
import LowerSection from './LowerSection';
import { movieDetailData } from './movieDetailData';
import UpperSection from './UpperSection';
import { DataContext } from "@/provider/StateProvider"
import { useContext, useEffect } from "react"
import NavDetail from './NavDetail';
import { useGetMovie, useGetMovieCredit } from 'src/api/hooks';
import { AppLoadingPage } from '../base/loader/loadingPage';



const DetailComponent = ({ id }: { id?: string }) => {
    const { state, dispatch } = useContext(DataContext)

    const { data, isLoading } = useGetMovie({ id })
    const { data: creditsData, isLoading: creditIsLoading } = useGetMovieCredit({ id })
    useEffect(() => {
        dispatch({ type: 'SET_NAV_COMPONENT', payload: { Component: NavDetail, props: { title: data?.original_title, description: data?.tagline } } })
    }, [data])
    return (
        <>
            <AppLoadingPage isLoading={isLoading || creditIsLoading} />
            <Spacer vert={69} />
            <UpperSection movie={data as movieDetailType} />
            <Spacer space={100} />
            <LowerSection movie={data as movieDetailType} casts={creditsData?.cast} />
        </>
    )
}

export default DetailComponent