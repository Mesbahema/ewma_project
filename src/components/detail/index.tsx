import { movieDetailType } from '@/types/movie';
import styled from '@emotion/styled';
import { Spacer } from '../base/Spacer.';
import { movieData } from '../home/movieData';
import LowerSection from './LowerSection';
import { movieDetailData } from './movieDetailData';
import UpperSection from './UpperSection';


const DetailComponent = () => {
    return (
        <>
            <Spacer vert={69} />
            <UpperSection movie={movieDetailData as movieDetailType} />
            <Spacer space={100} />
            <LowerSection movie={movieDetailData as movieDetailType} />
        </>
    )
}

export default DetailComponent