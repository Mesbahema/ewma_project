import styled from "@emotion/styled"


const Container = styled.div(({ theme, maxWidth }: { theme?: ThemeObjectType, maxWidth: BreakPointType}) => ({
    width: '100%',
    maxWidth: theme?.breakpoints.values[maxWidth],
    margin: 'auto',
}))

export default Container;