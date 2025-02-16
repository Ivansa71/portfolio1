// import React from 'react';
import photo from '../../../../assets/imges/GKv-xmawaz4-_1_.webp'
import styled from "styled-components";
import {FlexContainer} from "../../../../components/FlexContainer.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Cotainer>
                <FlexContainer alignItems={"center"} justifyContent={"space-around"} wrap= 'wrap'>
                    <StyledText>
                        <span>Hi 👋, my name is </span>
                        <Name>Ivan Smirnov</Name>
                        <h1>Frontend developer</h1>
                    </StyledText>
                    <Photo src={photo} alt=''/>
                </FlexContainer>
            </Cotainer>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    margin-top: 120px;
`

const Photo = styled.img`
    object-fit: cover;
    width: 185px;
    height: 185px;
    border-radius: 230px;
    border: double 5px transparent;
    background-image: linear-gradient(#13b0f5, #e70faa), radial-gradient(circle at top left, #13b0f5, #e70faa);
    background-origin: border-box;
    background-clip: content-box, border-box;
    
    @media ${theme.media.mobile} {
        margin-top: 10px;
    }

`

export const StyledText = styled.div`
    //font-family: "Poppins", sans-serif;
    //font-weight: 700;
    //font-size: 20px;
    color: #42446e;
    ${font({family: '"Poppins", sans-serif', weight: 700, Fmax: 20, Fmin: 15  })};

   
   
    @media ${theme.media.mobile} {
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
    ${font({weight: 800})};
`

