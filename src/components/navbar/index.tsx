import { themeObject } from "@/provider/AppThemeProvider"
import styled from "@emotion/styled"

const NavbarWrapper = styled.div(({ theme }: { theme?: typeof themeObject }) => ({
    height: 85,
    backgroundColor: theme?.palette.grey.main,
    borderRadius: theme?.shape.borderRadius.common
}))

const Navbar = () => {
    return(
        <NavbarWrapper>
            
        </NavbarWrapper>
    )
}

export default Navbar