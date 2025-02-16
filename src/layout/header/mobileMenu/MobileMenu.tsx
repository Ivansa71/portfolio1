// import React from 'react';

import styled, {css} from "styled-components";
import {SyledTitleImg} from "../Header.tsx";
import {Icon} from "../../../components/titleImg/Icon.tsx";
import {theme} from "../../../styles/Theme.tsx";



export const MobileMenu = () => {
    return (
        <StyledMenu>
            <BurgerButton isOpen={false}>
            <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    <ListItem>
                        <Link href="">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">About</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">Tech Stack</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">Contact</Link>
                    </ListItem>
                </ul>
            <SyledTitleImg>
                <Icon iconId='vkSvg' height='60'/>
                <Icon iconId='telegramSvg' height='60'/>
                <Icon iconId='katSvg' width='37'/>
            </SyledTitleImg>
            </MobileMenuPopup>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
   
    display: none;
    gap: 20px;
    align-items: center;

    ul {
        display: flex;
        gap: 30px;
    }


    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #ffffff;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
    `
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`

const BurgerButton = styled.button <{isOpen: boolean}>`
    position: fixed;
    top: -120px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: #000000;
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: #000000;
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: black;
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const ListItem = styled.li`
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: #666;
    transition: 0.8s;
   
    &:hover {

        transform: rotate(360deg);

        @media ${theme.media.tablet} {
            transform: none;
        }
    }

    @media ${theme.media.tablet} {
        font-size: 60px;
    }
    
`
const Link = styled.a`
    &:hover {
        color: #f706ff;
    }
`




