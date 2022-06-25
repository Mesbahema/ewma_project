import { themeObject } from '@/provider/AppThemeProvider';
import styled from '@emotion/styled';
import { MButton } from '../base/MButton';
import { MText } from '../base/MText';

const PaginationContainer = styled.div({
    width: 310,
    height: 150,
    margin: 'auto',
    display: 'grid',
    gridTemplateRows: '60% 40%',
});
const LowerSection = styled.div({
    width: '100%',
    height: '100%',
});
const UpperSection = styled.div({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '45% 1% 45%',
    justifyContent: 'space-between',
});
const VerticalLine = styled.div(({ theme }: { theme?: ThemeObjectType }) => ({
    height: '40px',
    marginTop: 20,
    width: 1.5,
    backgroundColor: theme?.palette.text[700]
}));
type PaginationPropTypes = {
    hasNextPage?: boolean,
    hasPrevPage?: boolean,
    totalPage?: number
}
const Pagination = ({
    hasNextPage,
    hasPrevPage,
    totalPage,
}: PaginationPropTypes) => {
    return (
        <>

            <PaginationContainer>
                <UpperSection>
                    <MButton>
                        <MText align='center' color={themeObject.palette.text[700]} fontWeight='bold'>Previous Page</MText>
                    </MButton>
                    <VerticalLine />
                    <MButton>
                        <MText align='center' color={themeObject.palette.primary.main} fontWeight='bold'>Next Page</MText>
                    </MButton>
                </UpperSection>
                <LowerSection>
                    <MText align='center' color={themeObject.palette.text[700]} variant='body1'>Showing results 1-20</MText>

                </LowerSection>
            </PaginationContainer>
        </>
    )
}

export default Pagination