// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/titleImg/Icon.tsx";
import {SyledTitleImg} from "../../Header.tsx";
import {Logo} from "../../../../components/logo/Logo.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";



export const Contacts = () => {
    return (
        <Contact>
            <Cotainer>
                <StyledContact>For any questions please mail me:</StyledContact>
                <Emeil>ithuta484@gmail.com</Emeil>
                <ContactDiv>
                    <Logo/>
                    <Number>+7-xxx-xxx-xx-xx</Number>
                    <SyledTitleImg>
                        <Icon iconId='vkSvg' height='60'/>
                        <Icon iconId='telegramSvg' height='60'/>
                        <Icon iconId='katSvg' width='37'/>
                    </SyledTitleImg>
                </ContactDiv>
                <Icon iconId='line' width="1194" height="2" viewBox="0 0 1194 2"/>
            </Cotainer>
        </Contact>
    );
};

const Contact = styled.section`

`
const StyledContact = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #42446e;
    display: flex;
    justify-content: center;
    
`

const Emeil = styled.h2`
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    text-align: center;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ContactDiv = styled.div`
 display: flex;
    justify-content: space-between;
`

const Number = styled.span`
    display: flex;
    align-items: center;
    
`