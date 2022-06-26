import styled from "@emotion/styled"


const Container = styled.div(({ theme, maxWidth }: { theme?: ThemeObjectType, maxWidth: BreakPointType}) => ({
    width: '100%',
    maxWidth: theme?.breakpoints.values[maxWidth],
    margin: 'auto',
    padding: '0 20px',
}))

export default Container;