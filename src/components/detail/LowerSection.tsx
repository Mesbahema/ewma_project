import { movieDetailType } from '@/types/movie'
import { MText } from '../base/MText'
import { Spacer } from '../base/Spacer.'

const LowerSection = ({ movie }: { movie: Partial<movieDetailType> }) => {
    return (
        <>
            <MText >{movie.overview}</MText>
            <Spacer space={50} />
            <MText variant='h6' fontWeight='bold'>Credits: </MText>
            <Spacer space={10} />
            <MText >Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace , Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace and 19 more.</MText>
        </>
    )
}

export default LowerSection