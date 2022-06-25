import { themeObject } from "@/provider/AppThemeProvider";

type Radius = keyof typeof themeObject['shape']['borderRadius'];

export type MButtonStyleProps = AppBaseColorType &
    AppTypographyWeight & {
        radius?: Radius;
        active?: boolean;
        loading?: boolean;
        variant?: 'text' | 'contained' | 'outlined';
        hoverEffect?: 'common' | 'none';
    };

export type MButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    MButtonStyleProps;
