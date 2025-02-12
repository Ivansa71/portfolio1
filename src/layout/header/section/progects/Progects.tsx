// import React from 'react';

import styled from "styled-components";
import {SectionTitle} from "../../../../components/section/SectionTitle.tsx";
import {SectionText} from "../../../../components/section/SectionText.tsx";
import {FlexContainer} from "../../../../components/FlexContainer.tsx";
import {Progect} from "../../../../components/progect/Progect.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";

export const Progects = () => {
    return (
        <StyleProgects>
            <Cotainer>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexContainer wrap = 'wrap' justifyContent='space-evenly' >
                    <Progect iconId='progect' title='Project Tile goes here' text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content' stack='HTML , JavaScript, SASS, React'/>
                    <Progect iconId='progect' title='Project Tile goes here' text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content' stack='HTML , JavaScript, SASS, React'/>
                    <Progect iconId='progect' title='Project Tile goes here' text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content' stack='HTML , JavaScript, SASS, React'/>
                    <Progect iconId='progect' title='Project Tile goes here' text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content' stack='HTML , JavaScript, SASS, React'/>
                    <Progect iconId='progect' title='Project Tile goes here' text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content' stack='HTML , JavaScript, SASS, React'/>
                    <Progect iconId='progect' title='Project Tile goes here' text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content' stack='HTML , JavaScript, SASS, React'/>
                </FlexContainer>
            </Cotainer>
        </StyleProgects>
    );
};

const StyleProgects = styled.section `
    
`

