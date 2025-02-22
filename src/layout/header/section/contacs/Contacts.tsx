// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/titleImg/Icon.tsx";
import {SyledTitleImg} from "../../Header.tsx";
import {Logo} from "../../../../components/logo/Logo.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";
import {font} from "../../../../styles/Common.ts";
import {theme} from "../../../../styles/Theme.tsx";



export const Contacts = () => {
    return (
        <Contact>
            <Cotainer>
                <StyledContact>For any questions please mail me:</StyledContact>
                <Emeil href= 'mailto: ithuta484@gmail.com'>ithuta484@gmail.com</Emeil>
                <ContactDiv>
                    <Logo/>
                    <Number href= 'tel:+7-920-818-39-29'>+7-xxx-xxx-xx-xx</Number>
                    <SyledTitleImg>
                        <Icon iconId='vkSvg' height='60'/>
                        <Icon iconId='telegramSvg' height='60'/>
                        <Icon iconId='katSvg' width='37'/>
                    </SyledTitleImg>
                </ContactDiv>
                <Line/>
            </Cotainer>
        </Contact>
    );
};

const Contact = styled.section`

`
const StyledContact = styled.div`
    ${font({family: '"Poppins", sans-serif', weight: 700, Fmax: 20, Fmin: 15, color: '#42446e' })};
    display: flex;
    justify-content: center;
    
`

const Emeil = styled.a`
    ${font({family: '"DM Sans", sans-serif', weight: 700, Fmax: 30, Fmin: 20, lineHeight: 1.2069, spacing:-0.02 })};
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    justify-content: center;
`

const ContactDiv = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }
`

const Number = styled.a`
    display: flex;
    align-items: center;
    
`

const Line = styled.div`
    width: 100%;
    border-top: 1px solid #5d616a
`