// import React from 'react';

import {Icon} from "../titleImg/Icon.tsx";
import styled from "styled-components";

import {ProgectLinks, ProgectStack, ProgectText, ProgectTitle} from "./ProgectStyles.tsx";



type ProgectPropsType = {
    iconId: string;
    title: string;
    text: string;
    stack: string;
    href?: string;

}

export const Progect = (props: ProgectPropsType) => {
    return (
        <ProgectContainer>
            <Icon iconId={props.iconId} width="330" height="260" viewBox="0 0 375 260"/>
            <ProgectTitle>{props.title}</ProgectTitle>
                <ProgectText>{props.text}</ProgectText>
                    <ProgectStack>TECH STACK: {props.stack}</ProgectStack>
                    <ProgectLinks>
                        <a href= {props.href}>Live Preview</a>
                        <a href= {props.href}>View Code</a>
                    </ProgectLinks>
        </ProgectContainer>
);
};

const ProgectContainer = styled.div `
    height: 570px;
    width: 330px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 8px;
    display: flex;
    flex-direction: column
`