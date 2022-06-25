import { themeObject } from "@/provider/AppThemeProvider";

type Palette = keyof typeof themeObject['palette'];

type Degree =
    | keyof typeof themeObj['palette']['primary']
    | keyof typeof themeObj['palette']['info'];





declare global {
    type Variants =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'caption2';
    type AppBaseColorType = {
        palette?: Palette;
        degree?: Degree;
        palette2?: Palette;
        degree2?: Degree;
    };

    type AppTypographyVariant = {
        variant?: Variants;
        active?: boolean
    };

    type AppTypographyWeight = {
        fontWeight?: Weights;
    };

    type AppTypographyProperty = {
        align?: Property.TextAlign;
    };

    type AppScaleVariant = {
        scale?: 'tiny' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    };

    type Weights = 'bold' | 'semibold' | 'medium' | 'regular' | 'light';

    type ThemeObjectType = typeof themeObject

    type BreakPointType = keyof typeof themeObject.breakpoints.values

    type AppCommonChild = { children: React.ReactNode }
}