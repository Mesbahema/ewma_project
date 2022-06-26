import styled from "@emotion/styled";
import { useRouter } from "next/router";
import BackIcon from "../assets/icons/BackIcon";
import { MButton } from "../base/MButton";
import { MText } from "../base/MText";
import { Spacer } from "../base/Spacer.";

const NavDetailWrapper = styled.div({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 81px',
});
const StyledNavButton = styled(MButton)(({ theme }: { theme?: ThemeObjectType }) => ({
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme?.shape.borderRadius.large
}));
const DetailsSection = styled.div(({ theme }: { theme?: ThemeObjectType }) => ({
}));


const NavDetail = ({title, description}: any) => {

    const router = useRouter()

    return (
        <NavDetailWrapper>
            <StyledNavButton onClick={()=> router.back()} variant="contained">
                <BackIcon />
                <Spacer hori={3} />
                Back
            </StyledNavButton>
            <Spacer hori={20} />
            <DetailsSection>
                <MText variant="h5" fontWeight="bold">{title}</MText>
                <MText variant="h6">{description}</MText>
            </DetailsSection>
        </NavDetailWrapper>
    )
}

export default NavDetail