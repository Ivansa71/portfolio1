// import React from 'react';

import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Cotainer} from "../../components/Cotainer.tsx";
import {font} from "../../styles/Common.ts";
import {theme} from "../../styles/Theme.tsx";



export const Footer = () => {
    return (
        <StyledFooter>
            <Cotainer>
                <FooterContainer >
                    <Menu/>
                    <Slogan>
                        <span>Designed and built by </span>
                        <Me>me personally </Me>
                        <span>with </span>
                        <Cofee>love and coffee</Cofee>
                    </Slogan>
                </FooterContainer>
            </Cotainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: white;
    position: relative;
    height: 70px;
`

const FooterContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    
    @media ${theme.media.tablet} {
        justify-content:center;
    }
`

const Slogan = styled.div`
    ${font({family: '"Poppins", sans-serif', weight: 400, Fmax: 10, Fmin: 9, lineHeight: 1.44444, color: '#666'})};
    text-align: center;
    
    @media ${theme.media.tablet} {
        font-size: 15px;
    }
    
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

