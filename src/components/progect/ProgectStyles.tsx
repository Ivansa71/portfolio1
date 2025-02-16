import styled from "styled-components";
import {font} from "../../styles/Common.ts";

export const ProgectTitle = styled.h2`
    ${font({family: '"Poppins", sans-serif', weight: 500, Fmax: 28, Fmin: 22, lineHeight: 0.92857, color: '#000000' })};
    text-align: center;
    margin-top: 25px;
`

export const ProgectLinks = styled.div `
    ${font({family: '"Poppins", sans-serif', weight: 400, Fmax: 16, Fmin: 12, lineHeight: 1.625, color: '#000' })};
    text-decoration: underline;
    text-decoration-skip-ink: none;
    margin-top: 15px;
    display: flex;
    justify-content: space-around`

export const ProgectStack = styled.text `
    ${font({family: '"Poppins", sans-serif', weight: 400, Fmax: 14, Fmin: 11, lineHeight: 1.625, color: '#42446e' })};
    margin-left: 20px;
    margin-top: 12px;
`

export const ProgectText = styled.text`
    ${font({family: '"Poppins", sans-serif', weight: 300, Fmax: 18, Fmin: 14, lineHeight: 1.44444, color: '#666' })};
    margin-left: 20px;
    margin-top: 20px;
`