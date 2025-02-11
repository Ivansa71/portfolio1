// import React from 'react';

import {Icon} from "../titleImg/Icon.tsx";
import styled from "styled-components";
import {ProgectTitle} from "./ProgectTitle.tsx";
import {ProgectText} from "./ProgectText.tsx";
import {ProgectStack} from "./ProgectStack.tsx";
import {ProgectLinks} from "./ProgectLinks.tsx";


type ProgectPropsType = {
    iiconId: string;
    title: string;
    text: string;
    stack: string;
    href?: string;

}

export const Progect = (props: ProgectPropsType) => {
    return (
        <ProgectContainer>
            <Icon iconId={props.iiconId} width="375" height="260" viewBox="0 0 375 260"/>
            <ProgectTitle>{props.title}</ProgectTitle>
                <ProgectText>{props.text}</ProgectText>
                    <ProgectStack>TECH STACK: ${props.stack}</ProgectStack>
                    <ProgectLinks>
                        <a href= '{props.href}'>Live Preview</a>
                        <a href= '{props.href}'>View Code</a>
                    </ProgectLinks>
        </ProgectContainer>
);
};

const ProgectContainer = styled.div `
    height: 570px;
    width: 375px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column
`