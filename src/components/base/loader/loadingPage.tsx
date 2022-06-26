import styled from '@emotion/styled';
import { PrimarySpinner } from './spinner';

const Container = styled.div({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    top: 0,
    right: 0,
    zIndex: 5
});

export const AppLoadingPage = ({isLoading}: {isLoading?: boolean}) => {
    return (
        <>
        {isLoading && <Container>
            <PrimarySpinner />
        </Container>}
        </>
    );
};