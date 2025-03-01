// import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Cotainer} from "../../components/Cotainer.tsx";
import {FlexContainer} from "../../components/FlexContainer.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";



export const Header = () => {
    return (
        <StyledHeader >
            <Cotainer>
                <FlexContainer justifyContent='space-between' alignItems= 'center' >
                    <Logo/>
                    <StyledContainer>
                        <Menu/>
                        <MobileMenu/>
                    </StyledContainer>
                </FlexContainer>
            </Cotainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 99999;
    
    
`
const StyledContainer = styled.div`
display: flex;
    align-items: center;
    gap: 30px;
`

export const SyledTitleImg = styled.div`
    display: flex;
`

