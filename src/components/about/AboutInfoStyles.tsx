import styled from "styled-components";
import {font} from "../../styles/Common.ts";

export const AboutInfoTitle = styled.h3`
    ${font ({family: '"Poppins", sans-serif', weight: 400, Fmax: 20, Fmin: 15, lineHeight: 1.4, color: '#666', spacing: 0.05})};
`



export const AboutInfoTime = styled.span`
    ${font ({family: '"Poppins", sans-serif', weight: 600, Fmax: 10, Fmin: 8, lineHeight: 2.88889, color: '#018c0f'})};
    text-align: center;
    background-color:#D7FFE0;
    padding: 0px 15px;
    border-radius: 15px;
    white-space: nowrap;
`

export const AboutInfoName = styled.span`
    ${font ({family: '"Poppins", sans-serif', weight: 500, Fmax: 15, Fmin: 12, lineHeight: 2.33333, color: '#a7a7a7', spacing: 0.08})};
`
export const AboutInfoDate = styled.span`
    ${font ({family: '"Poppins", sans-serif', weight: 500, Fmax: 15, Fmin: 12, lineHeight: 2.33333, color: '#a7a7a7', spacing: 0.08})};
`