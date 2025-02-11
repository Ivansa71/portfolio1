// import React from 'react';

import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Cotainer} from "../../components/Cotainer.tsx";
import {FlexContainer} from "../../components/FlexContainer.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Cotainer>
                <FlexContainer justifyContent='space-between' alignItems='center' >
                    <Menu/>
                    <Slogan>
                        <span>Designed and built by </span>
                        <Me>me personally </Me>
                        <span>with </span>
                        <Cofee>love and coffee</Cofee>
                    </Slogan>
                </FlexContainer>
            </Cotainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 70px;
`

const Slogan = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.44444;
    text-align: center;
    color: #666;
    
`

const Me = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Cofee = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

