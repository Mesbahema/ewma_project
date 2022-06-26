import { themeObject } from "@/provider/AppThemeProvider"
import { DataContext } from "@/provider/StateProvider"
import styled from "@emotion/styled"
import { useContext } from "react"

const NavbarWrapper = styled.div(({ theme }: { theme?: typeof themeObject }) => ({
    height: 85,
    backgroundColor: theme?.palette.grey.main,
    borderRadius: theme?.shape.borderRadius.common
}))

const Navbar = () => {
    const {state, dispatch} = useContext(DataContext)
    
    const { NavComponent } = state
    const {Component, props} = NavComponent

    return(
        <NavbarWrapper>
            <Component {...props} />
        </NavbarWrapper>
    )
}

export default Navbar