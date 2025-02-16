// import React from 'react';

import styled from "styled-components";
import {AboutInfo} from "../../../../components/about/AboutInfo.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";
import {font} from "../../../../styles/Common.ts";
import {theme} from "../../../../styles/Theme.tsx";

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
    margin-bottom: 40px;
    margin-top: 20px;
    ${font ({family: '"Poppins", sans-serif', weight: 700, Fmax: 32, Fmin: 28, lineHeight: 1.2381, color: '#42446e', spacing: -0.01})};
    
    @media ${theme.media.mobile} {
        margin-bottom: 30px;
    }
`

const AboutTextConteiner = styled.div`
    max-width: 710px;
`
const AboutText = styled.span`
    width: 100%;
    ${font ({family: '"Poppins", sans-serif', weight: 400, Fmax: 18, Fmin: 15, lineHeight: 1.44444, color: '#666'})};
`



