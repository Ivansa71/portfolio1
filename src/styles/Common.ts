import {theme} from "./Theme.tsx";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?:number,
    spacing?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax, spacing}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.colorText};
    line-height: ${lineHeight || 1.2};
    letter-spacing: ${spacing}em;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`