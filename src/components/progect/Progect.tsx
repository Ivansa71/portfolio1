// import React from 'react';


import styled from "styled-components";

import {ProgectLinks, ProgectStack, ProgectText, ProgectTitle} from "./ProgectStyles.tsx";



type ProgectPropsType = {
    title: string;
    text: string;
    stack: string;
    hrefPreviev?: string;
    hrefCode?: string;
}

export const Progect = (props: ProgectPropsType) => {
    return (
        <ProgectContainer>
            <ImgesProject src = '../../../src/assets/imges/Rectangle%204.png' alt= ''/>
            <ProgectContetnt>
                <ProgectTitle>{props.title}</ProgectTitle>
                <ProgectText>{props.text}</ProgectText>
                <ProgectStack>TECH STACK: {props.stack}</ProgectStack>
                <ProgectLinks>
                    <a href= {props.hrefPreviev}>Live Preview</a>
                    <a href= {props.hrefCode}>View Code</a>
                </ProgectLinks>
            </ProgectContetnt>
        </ProgectContainer>
);
};

const ProgectContainer = styled.div `
    width: 330px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 8px;
    display: flex;
    flex-direction: column
`

const ProgectContetnt = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column
`

const ImgesProject = styled.img`
    width: 100%;
`