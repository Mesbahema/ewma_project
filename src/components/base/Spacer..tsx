import { themeObject } from '@/provider/AppThemeProvider';
import styled from '@emotion/styled';

interface Props {
    hori?: number;
    vert?: number;
    space?: number | string;
    spaceXs?: number | string;
    spaceSm?: number | string;
    spaceMd?: number | string;
    spaceLg?: number | string;
}

export const Spacer = styled.div(
    ({ theme = themeObject, space, hori, vert, spaceXs, spaceSm, spaceMd, spaceLg }: Props & { theme?: typeof themeObject }) => ({
        ...(hori && {
            margin: `0 ${hori}px`,
            [theme.breakpoints.values.xs]: {
                margin: `0 ${hori / 2}px`
            },
            [theme.breakpoints.values.sm]: {
                margin: `0 ${hori / 1.5}px`
            },
            [theme.breakpoints.values.md]: {
                margin: `0 ${hori / 1.3}px`
            }
        }),
        ...(vert && {
            margin: `${vert}px 0`,
            [theme.breakpoints.values.xs]: {
                margin: `${vert / 2}px 0`
            },
            [theme.breakpoints.values.sm]: {
                margin: `${vert / 1.5}px 0`
            },
            [theme.breakpoints.values.md]: {
                margin: `${vert / 1.3}px 0`
            }
        }),
        ...(space && { margin: space }),
        ...(spaceXs && {
            [theme.breakpoints.values.xs]: {
                margin: spaceXs
            }
        }),
        ...(spaceSm && {
            [theme.breakpoints.values.sm]: {
                margin: spaceSm
            }
        }),
        ...(spaceMd && {
            [theme.breakpoints.values.md]: {
                margin: spaceMd
            }
        }),
        ...(spaceLg && {
            [theme.breakpoints.values.lg]: {
                margin: spaceLg
            }
        })
    })
);

export const CommonSpacer = styled.div({
    margin: '64px 0'
});
