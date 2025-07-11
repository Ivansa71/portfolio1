// import React from 'react';

import styled from "styled-components";
import {FlexContainer} from "../../../../components/FlexContainer.tsx";
import {Icon} from "../../../../components/titleImg/Icon.tsx";
import {SectionTitle} from "../../../../components/section/SectionTitle.tsx";
import {SectionText} from "../../../../components/section/SectionText.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";



export const Skils = () => {
    return (
        <StyledSkils id="skils">
            <Cotainer>
                <SectionTitle>Мой стек</SectionTitle>
                <SectionText> Технологии, с которыми я работаю</SectionText>
                <FlexContainer wrap = 'wrap' justifyContent = 'space-evenly'>
                    <Icon iconId = 'htmlSvg' height='50' width = '50' viewBox= '0 0 120 120'/>
                    <Icon iconId= 'cssSvg' width="50" height="50" viewBox="0 0 120 119"/>
                    <Icon iconId= 'jsSvg' width="50" height="50" viewBox="0 0 120 120"/>
                    <Icon iconId= 'reactSvg' width="50" height="50" viewBox="0 0 113 101"/>
                    <Icon iconId= 'vscodeSvg' width="50" height="50" viewBox="0 0 112 112"/>
                    <Icon iconId='katSvg' width="48" height="48" viewBox="0 0 30 30"/>
                    <Icon iconId='TS' width="50" height="50" viewBox="0 0 420 420"/>
                </FlexContainer>
            </Cotainer>
        </StyledSkils>
    );
};

const StyledSkils = styled.section`
    //background-color: white;
    //position: relative;
`



