import React from 'react'
import { ThemeProvider, Global, css } from '@emotion/react'

const baseFonts: Record<Variants, { pxSize: number }> = {
    h1: { pxSize: 46 },
    h2: { pxSize: 34 },
    h3: { pxSize: 32 },
    h4: { pxSize: 28 },
    h5: { pxSize: 26 },
    h6: { pxSize: 22 },
    body1: { pxSize: 18 },
    body2: { pxSize: 16 },
    body3: { pxSize: 16 },
    caption: { pxSize: 14 },
    caption2: { pxSize: 12 }
};

const BASE_SIZE = 18;
//9px is smallest fontsize show in all screen size
const MIN_SIZE = 9 / baseFonts.caption2.pxSize;

export const variants = Object.entries(baseFonts).reduce((acc, [cur, value]) => {
    const minPx = value.pxSize * MIN_SIZE;
    const maxRem = value.pxSize / BASE_SIZE;
    const minRem = maxRem * MIN_SIZE;
    return {
        ...acc,
        [cur]: {
            fontSize: `clamp(${minPx}px ,calc(${minRem}rem + ${0.5}vw),${maxRem}rem)`,
            marginBlockStart: 0,
            marginBlockEnd: 0,
            lineHeight: 1.5
        }
    };
}, {} as Record<Variants, any>);

export const themeObject = {
    shadows: {
        light: '0px 4px 10px 2px #979797'
    },
    breakpoints: {
        values: {
            xs: 400,
            sm: 800,
            md: 1250,
            lg: 1536,
            xl: 1920
        }
    },
    palette: {
        primary: {
            main: '#318fe7',
            light: '#D6E1FF',
            '200': '#9BB6FF',
            '100': '#4090D0',
            dark: '#610FFA',

            '700': '#610FFA',
            '600': '#8C3DFF',
            '500': '#B561FF',
            '400': '#DD84FF',
            '300': '#FFA7FF'
        },
        secondary: {
            main: '#11B980',
            dark: '#610FFA',
            '700': '#610FFA',
            '600': '#8C3DFF',
            '500': '#B561FF',
            '400': '#DD84FF',
            '300': '#FFA7FF',
            '200': '#FFA7FF',
            '100': '#FFA7FF'
        },

        info: {
            main: '#007BFF',
            blue: '#007BFF',
            red: '#D53342',
            green: '#34D59D',
            grey: '#798897',
            orange: '#FF9645',
            yellow: '#FFA007'
        },
        grey: {
            main: '#E2E2E2',
            '100': '#F1F1F1',
            '200': '858585',
            '300': '#707070',
            '400': '#656565',
            '500': '#808080'
        },

        background: {
            main: '#EDEDF4',
            '100': '#EDEDF4',
            auth: '#EFF3FFD9',
            200: '#E5E3E3'
        },
        red: {
            main: '#D00',
            100: '#9F0B0B'
        },
        text: {
            main: '#222222',
            placeholder: '#8B8B8B',
            100: '#858585',
            700: '#858585'
        }
    },
    shape: {
        borderRadius: {
            common: 6,
            tiny: 4,
            small: 8,
            medium: 12,
            large: 16,
            xlarge: 24
        }
    },

    typography: {
        fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
        allVariants: { fontWeight: 'normal' },
        transform: { small: 'scale(0.85)', xsmall: 'scale(0.75)' },
        ...variants
    },
}

interface Props {
    children: React.ReactNode;
}

const AppThemeProvider = ({ children }: Props) => {
    return (
        <>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                    }

                    html,
                    body {
                        width: 100%;
                        height: 100%;
                        min-height: 100%;
                        padding: 0;
                        margin: 0;
                    }
                `}
            />
            <ThemeProvider 
            theme={themeObject}>{children}</ThemeProvider>
        </>
    )
}

export default AppThemeProvider