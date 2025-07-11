// import React from 'react';

import styled from "styled-components";
import {SectionTitle} from "../../../../components/section/SectionTitle.tsx";
import {SectionText} from "../../../../components/section/SectionText.tsx";
import {FlexContainer} from "../../../../components/FlexContainer.tsx";
import {Progect} from "../../../../components/progect/Progect.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";
// import {MenuProject} from "../../../../components/progect/MenuProject.tsx";

export const Progects = () => {
    return (
        <StyleProgects id ='Progects'>
            <Cotainer>
                <SectionTitle>Проекты</SectionTitle>
                <SectionText>Некоторые из моих работ</SectionText>
                {/*<MenuProject/>*/}
                <FlexContainer wrap = 'wrap' justifyContent='space-evenly' >
                    <Progect  title='Портфолио' text='Одностраничный сайт-портфолио с формой для отправки данных и каруселями' stack='HTML , JavaScript, CSS, React'/>
                    <Progect  title='Авторизация ' text='Форма авторизации для мобильного приложения' stack='React Native'/>
                    <Progect  title='Тудулист' text='Мобильное приложение тудулист' stack='React Native'/>
                    <Progect  title='Счетчик' text='Счетчик с использованием ...' stack='HTML , JavaScript, CSS, React'/>
                    <Progect  title='Заметки' text='Веб приложения для заметок' stack='HTML , JavaScript, CSS'/>
                </FlexContainer>
            </Cotainer>
        </StyleProgects>
    );
};

const StyleProgects = styled.section `
   
`

