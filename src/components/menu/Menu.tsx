// import React from 'react';

import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Icon} from "../titleImg/Icon.tsx";
import {SyledTitleImg} from "../../layout/header/Header.tsx";
import {Link} from "react-scroll";



export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <ListItem>
                    <NavLink to="home" smooth = {true} offset = {-80}>Home</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="about" smooth = {true} >About</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="skils" smooth = {true}>Tech Stack</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="Progects" smooth = {true}>Projects</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="contact" smooth = {true}>Contact</NavLink>
                </ListItem>
            </ul>

            <SyledTitleImg>
                <a href= 'https://vk.com/id132948390'>
                    <Icon iconId= 'vkSvg' height='60'/>
                </a>
                <a href= ''>
                    <Icon iconId= 'telegramSvg'  height='60'/>
                </a>
                <a  href= ''>
                    <Icon iconId = 'katSvg' width='37' />
                </a>
            </SyledTitleImg>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    ul {
        display: flex;
        gap: 30px;
    }


    @media ${theme.media.tablet} {
        display: none;
    }
`

const ListItem = styled.li`
    padding: 7px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: #8c108c;
    transition: 0.8s;

    &:hover {
        cursor: pointer;
        transform: rotate(360deg);


    }


`
const NavLink = styled (Link)`
    padding: 7px;
    &:hover {
        color: #f706ff;
        
    }
`



