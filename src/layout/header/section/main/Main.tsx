// import React from 'react';
import photo from '../../../../assets/imges/GKv-xmawaz4-_1_.webp'
import styled from "styled-components";
import {Cotainer} from "../../../../components/Cotainer.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.ts";
import Typewriter from 'typewriter-effect';


export const Main = () => {
    return (
        <StyledMain id = {'home'}>
            <Cotainer>
                <MainContainer>
                    <StyledText>
                        <span>Hi 👋, my name is </span>
                        <Name>Ivan Smirnov</Name>
                        <MainTitle>
                            <p>Frontend Developer</p>
                            <Typewriter
                            options={{
                                strings: ['Frontend Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                            }}
                        /></MainTitle>
                    </StyledText>
                        <Photo src={photo} alt=''/>
                </MainContainer>
            </Cotainer>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    margin-top: 120px;
    
   
    
`
const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

const MainTitle = styled.h1`
 p {
     display: none;
 }
`


const Photo = styled.img`
    background-color: rgb(255, 255, 255);
    position: relative;
    object-fit: cover;
    width: 377px;
    height: 377px;
    border-radius: 230px;
    border: double 5px transparent;
    background-image: linear-gradient(#13b0f5, #e70faa), radial-gradient(circle at top left, #13b0f5, #e70faa);
    background-origin: border-box;
    background-clip: content-box, border-box;
    
    @media ${theme.media.tablet} {
        margin-top: 10px;
    }

`

export const StyledText = styled.div`
    background-color: rgb(255, 255, 255);
    position: relative;
    color: #42446e;
    ${font({family: '"Poppins", sans-serif', weight: 700, Fmax: 20, Fmin: 15})};

   
   
    @media ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
}
        
    }
`

export const Name = styled.h2`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${font({weight: 800, Fmax: 30, Fmin: 20})};
`

