import styled from "styled-components";
import {font} from "../../styles/Common.ts";
import {theme} from "../../styles/Theme.tsx";

export const SectionTitle = styled.h2 `
    ${font ({family: '"Poppins", sans-serif', weight: 700, Fmax: 48, Fmin: 25, lineHeight: 0.54167, color: '#42446e'})};
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    
    @media ${theme.media.mobile} {
        margin-bottom: 30px;
    }
`