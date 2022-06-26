import { themeObject } from '@/provider/AppThemeProvider'; 
import styled from '@emotion/styled';
import { SpinnerCircular } from 'spinners-react';
import { SpinnerProps } from 'spinners-react/lib/esm/helpers';

export const StyledSpinner = styled(SpinnerCircular)<{ css?: any }>(({ theme, css }) => ({
    ...(css && css),
    color: '#318fe7',
    secondaryColor: '#F00'
}));

export const StyledButtonSpinner = styled(StyledSpinner)({
    position: 'absolute',
    top: '50%',
    
    transform: 'scale(2) translate(0px, -50%)'
});

export const PrimarySpinner = (props: SpinnerProps) => {
    return (
        <StyledButtonSpinner
            {...props}
            color={themeObject.palette.primary.main}
            secondaryColor={themeObject.palette.grey['100']}
        />
    );
};
