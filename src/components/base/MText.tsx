import { themeObject } from '@/provider/AppThemeProvider';
import styled from '@emotion/styled';
// import {  getTextColor, textWeight } from 'src/utils/theme/helper';
import { Property } from 'csstype';
import React, { forwardRef } from 'react';

export function getTextColor({ palette, degree }: AppBaseColorType) {
    if (!palette) {
        return themeObject.palette.text.main;
    } else if (!degree || !themeObject.palette[palette] || !(degree in themeObject.palette[palette])) {
        return (themeObject.palette[palette] as any)['main'];
    }
    return (themeObject.palette[palette] as any)[degree];
}

const textWeight: Record<Weights, number> = {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
    light: 300
};

export type MTextPropTypes = AppBaseColorType &
    AppTypographyVariant &
    AppTypographyWeight &
    AppTypographyProperty & { lineHeight?: number } 

const BSMText = styled.p<MTextPropTypes>(
    ({
        theme,
        fontWeight: weight = 'regular',
        color,
        variant = 'body1',
        palette ,
        degree,
        align = 'left',
        lineHeight,
        // css
    }) => {
        const propTheme = theme as ThemeObjectType
        return {
        // ...(css && css),
        color: color ? color : getTextColor({ degree, palette }),
        fontWeight: textWeight[weight],
        textAlign: align,
        ...propTheme?.typography[variant],
        lineHeight: lineHeight ?? propTheme?.typography[variant].lineHeight
    }}
);

export type MTextPropsWithRef = AppBaseColorType &
    AppTypographyVariant &
    AppTypographyWeight &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & 
    // {theme: ThemeObjectType }
    //  &
    
    AppScaleVariant & {
        children?:
            | React.ReactNode
            | string
            | number
            | undefined
            | Array<JSX.Element | string | number | undefined>;
        align?: Property.TextAlign;
        span?: boolean;
    };
    

export type MTextProps = Omit<MTextPropsWithRef, 'ref'>;

export const MText = forwardRef(
    ({ span, ...props }: MTextPropsWithRef & { lineHeight?: number }, ref) => {
        const asVariant = span
            ? 'span'
            : props.variant?.includes('caption')
            ? 'span'
            : props.variant?.includes('body')
            ? 'p'
            : (props.variant as any);
        return <BSMText ref={ref as any} as={asVariant} {...props} />;
    }
);

MText.displayName = 'MText';
