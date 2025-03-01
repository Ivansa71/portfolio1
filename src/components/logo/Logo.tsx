// import React from 'react';

import styled from "styled-components";
import {animateTopScroll as scroll} from "react-scroll/modules/mixins/animate-scroll";

export const Logo = () => {
    return (
        <a onClick={() => {scroll(1,0,'home',0)}}>
            <ImgStyled src="/public/logo1.svg" alt="logo"/>
        </a>
    );
};

export const ImgStyled = styled.img`
height: 45px;
    margin-top: 15px;
    margin-left: 10px;
`
