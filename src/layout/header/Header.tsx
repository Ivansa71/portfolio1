// import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Icon} from "../../components/titleImg/Icon.tsx";
import {Cotainer} from "../../components/Cotainer.tsx";
import {FlexContainer} from "../../components/FlexContainer.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Cotainer>
                <FlexContainer justifyContent='space-between' alignItems= 'center' >
                    <Logo/>
                    <StyledContainer>
                        <Menu/>
                        <SyledTitleImg>
                            <Icon iconId= 'vkSvg' height='60'/>
                            <Icon iconId= 'telegramSvg'  height='60'/>
                            <Icon iconId = 'katSvg' width='37' />
                        </SyledTitleImg>
                    </StyledContainer>
                </FlexContainer>
            </Cotainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    height: 59px;
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

