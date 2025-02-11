// import React from 'react';

import styled from "styled-components";
import {AboutInfo} from "../../../../components/about/AboutInfo.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";

export const About = () => {
    return (
        <AboutStyles>
            <Cotainer>
                <AboutTitle>About Me</AboutTitle>
                <AboutTextConteiner>
                    <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</AboutText>
                </AboutTextConteiner>
                <AboutTitle>Work Experience</AboutTitle>
                <AboutInfo aboutInfoTitle='There is no information yet)'/>
                <AboutTitle>Education</AboutTitle>
                <AboutInfo aboutInfoTitle='Fundamentals of frontend development' aboutInfoTime='Full Time' aboutInfoName='IT-inkubator' aboutInfoDate='Oct 2024 - Feb 2025'/>
                <AboutInfo aboutInfoTitle='The main course of a frontend developer' aboutInfoTime='Full Time' aboutInfoName = 'IT-inkubator' aboutInfoDate='Feb 2025 - present time'/>
            </Cotainer>
        </AboutStyles>
    );
};

const AboutStyles = styled.section`
    display: flex;
    flex-direction: column;
`

const AboutTitle = styled.h2`
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.2381;
    letter-spacing: -0.01em;
    color: #42446e;
`

const AboutTextConteiner = styled.div`
    width: 710px;
`
const AboutText = styled.span`
    
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #666;
`



