import { themeObject } from '@/provider/AppThemeProvider';
import { DataContext } from '@/provider/StateProvider';
import styled from '@emotion/styled';
import { useContext } from 'react';
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
    totalResults?: number,
    totalPage?: number
}
const Pagination = ({
    totalResults,
    totalPage,
}: PaginationPropTypes) => {
    const {state, dispatch} = useContext(DataContext)
    
    const { page } = state

    const setPage = (currentPage: number, directtion: number) => {
        dispatch({type: 'SET_PAGE', payload: currentPage + directtion})
    }

    const getFromTo = (page: number) => {
        const to = page * 20
        const from = to - 19
        return `${from}-${to}`
    }
    return (
        <>

            <PaginationContainer>
                <UpperSection>
                    <MButton onClick={() => setPage(page, -1)} disabled={page === 1}>
                        <MText align='center' color={themeObject.palette.primary.main} fontWeight='bold'>Previous Page</MText>
                    </MButton>
                    <VerticalLine  />
                    <MButton disabled={page === totalPage} onClick={() => setPage(page, 1)}>
                        <MText align='center' color={themeObject.palette.primary.main} fontWeight='bold'>Next Page</MText>
                    </MButton>
                </UpperSection>
                <LowerSection>
                    <MText align='center' color={themeObject.palette.text[700]} variant='body1'>Showing results {`${getFromTo(page)}`}</MText>

                </LowerSection>
            </PaginationContainer>
        </>
    )
}

export default Pagination