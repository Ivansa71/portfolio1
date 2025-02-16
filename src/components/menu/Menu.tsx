// import React from 'react';

import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Icon} from "../titleImg/Icon.tsx";
import {SyledTitleImg} from "../../layout/header/Header.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
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
                <Icon iconId= 'vkSvg' height='60'/>
                <Icon iconId= 'telegramSvg'  height='60'/>
                <Icon iconId = 'katSvg' width='37' />
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
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: #666;
    transition: 0.8s;
    &:hover {
        
        transform: rotate(360deg);
        
        
    }
    
    
`
const Link = styled.a`
    &:hover {
        color: #f706ff;
    }
`



