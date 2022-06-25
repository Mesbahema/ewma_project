import Container from "@/components/base/Container";
import React from "react";

import { themeObject } from "@/provider/AppThemeProvider"
import styled from "@emotion/styled"
import Navbar from "@/components/navbar";
import { Spacer } from "@/components/base/Spacer.";

const UpperBound = styled.div(({ theme }: { theme?: typeof themeObject }) => ({
    height: 48,
    backgroundColor: theme?.palette.secondary.main
}))

const Footer = styled.div(({ theme }: { theme?: typeof themeObject }) => ({
    height: 200,
}))

interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <UpperBound />
            <Spacer space={69} />
            <Container maxWidth="md">
                <Navbar />
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default MainLayout