import styled from "styled-components";
import {font} from "../../styles/Common.ts";

export const AboutInfoTitle = styled.h3`
    ${font ({family: '"Poppins", sans-serif', weight: 400, Fmax: 20, Fmin: 15, lineHeight: 1.4, color: '#666', spacing: 0.05})};
`

export const AboutInfoTimeConteiner = styled.div`
    width: 84px;
    height: 24px;
    background-color:#D7FFE0;
    border-radius: 15px;
`
export const AboutInfoTime = styled.p`
    ${font ({family: '"Poppins", sans-serif', weight: 600, Fmax: 10, Fmin: 8, lineHeight: 2.88889, color: '#018c0f'})};
    text-align: center;
`

export const AboutInfoName = styled.p`
    ${font ({family: '"Poppins", sans-serif', weight: 500, Fmax: 15, Fmin: 12, lineHeight: 2.33333, color: '#a7a7a7', spacing: 0.08})};
`
export const AboutInfoDate = styled.p`
    ${font ({family: '"Poppins", sans-serif', weight: 500, Fmax: 15, Fmin: 12, lineHeight: 2.33333, color: '#a7a7a7', spacing: 0.08})};
`