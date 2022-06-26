import { CastType, movieDetailType } from '@/types/movie'
import { MText } from '../base/MText'
import { Spacer } from '../base/Spacer.'

const stringifyCasts = (casts: CastType[]) => {
    const BreakForeach = {};
    try {
        const max = 10
        const sortedCast = casts.sort((a, b) => {
            return  b.popularity - a.popularity;
        });
        let output = ''
        try {

            sortedCast.forEach((item, key) => {
                if(key === max) throw BreakForeach
                if (key === 0) {
                    output += item.original_name
                } else {
                    output += `, ${item.original_name}`
                }
            })
        } catch {

        }

        if(sortedCast.length > max) output += ` and ${sortedCast.length - max} more`
        
        return output
    }
    catch {
        return ''
    }
}

const LowerSection = ({ movie, casts }: { movie: Partial<movieDetailType>, casts?: CastType[] }) => {
    
    return (
        <>
            <MText >{movie?.overview}</MText>
            <Spacer space={50} />
            <MText variant='h6' fontWeight='bold'>Credits: </MText>
            <Spacer space={10} />
            <MText >{stringifyCasts(casts as CastType[])}.</MText>
        </>
    )
}

export default LowerSection