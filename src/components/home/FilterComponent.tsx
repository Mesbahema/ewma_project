import { DataContext } from '@/provider/StateProvider';
import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { DateRangePicker } from 'rsuite';
import { MButton } from '../base/MButton';
import { MText } from '../base/MText';
import { Spacer } from '../base/Spacer.';

const FilterComponentWrapper = styled.div({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 81px',
    justifyContent: 'space-between'
});
const StyledNavButton = styled(MButton)(({ theme }: { theme?: ThemeObjectType })=> ({
    color: 'white',
    fontWeight: 'bold',
    borderRadius: theme?.shape.borderRadius.large
}));

const addZero = (date: string) => {
    if(date.length === 1) return `0${date}`
    return date
}

const getDateFormat = ( date: any) => {
    try {

        return `${date.getFullYear().toString()}-${addZero((date.getUTCMonth() + 1).toString())}-${addZero(date.getDate().toString())}`
    } catch {
        return ''
    }
}
const FilerComponent = () => {
    const {state, dispatch} = useContext(DataContext)
    const [dateRange, setDateRange] = useState(['', ''] as string[])
    const handleChange = (e: any) => {
        try {
            setDateRange(e.map((item: any) => getDateFormat(item)))
        } catch {
            setDateRange(['', ''])
        }
        
    }

    const handleClick = () => {
        dispatch({type: 'SET_DATE_RANGE', payload: dateRange})
    }
    return(
        <FilterComponentWrapper>
            <MText variant='h6' fontWeight='bold'>Search by release date:</MText>
            <DateRangePicker onChange={handleChange} />
            <Spacer hori={100}/>
            <StyledNavButton onClick={handleClick} variant='contained'>Search</StyledNavButton>
        </FilterComponentWrapper>
    )
}

export default FilerComponent

