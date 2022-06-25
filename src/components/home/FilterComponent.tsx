import styled from '@emotion/styled';
const FilterComponentWrapper = styled.div({
    width: '100%',
    height: '100%',
    backgroundColor: 'green'
});

const FilerComponent = () => {
    return(
        <FilterComponentWrapper>
            <input type="date"/>
        </FilterComponentWrapper>
    )
}

export default FilerComponent

