// import React from 'react';

import styled from "styled-components";
import {FlexContainer} from "../FlexContainer.tsx";
import {AboutInfoDate, AboutInfoName, AboutInfoTime, AboutInfoTitle,} from "./AboutInfoStyles.tsx";

type AboutInfoConteinerPropsType = {
    aboutInfoTitle?: string;
    aboutInfoTime?: string;
    aboutInfoName?: string;
    aboutInfoDate?: string;

}

export const AboutInfo = (props:AboutInfoConteinerPropsType) => {
    return (
        <AboutInfoConteiner>
            <FlexContainer justifyContent='space-between' alignItems= 'flex-start' >
                <AboutInfoTitle>{props.aboutInfoTitle}</AboutInfoTitle>

                    <AboutInfoTime>{props.aboutInfoTime}</AboutInfoTime>

            </FlexContainer>
            <FlexContainer justifyContent='space-between'>
                <AboutInfoName>{props.aboutInfoName}</AboutInfoName>
                <AboutInfoDate>{props.aboutInfoDate}</AboutInfoDate>
            </FlexContainer>

        </AboutInfoConteiner>
    );
};

const AboutInfoConteiner = styled.div`
    display: flex;
    flex-direction: column;
`


