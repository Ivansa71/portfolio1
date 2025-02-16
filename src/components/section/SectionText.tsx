import styled from "styled-components";
import {font} from "../../styles/Common.ts";

export const SectionText = styled.text `
    ${font ({family: '"Poppins", sans-serif', weight: 400, Fmax: 32, Fmin: 14, lineHeight: 0.8125, color: '#666'})};
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`