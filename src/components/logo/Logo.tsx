// import React from 'react';

import styled from "styled-components";

export const Logo = () => {
    return (
        <a href="">
            <ImgStyled src="/public/logo1.svg" alt="logo"/>
        </a>
    );
};

export const ImgStyled = styled.img`
height: 45px;
    margin-top: 15px;
    margin-left: 10px;
`
