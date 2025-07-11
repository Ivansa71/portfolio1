// import React from 'react';

import styled from "styled-components";
import {AboutInfo} from "../../../../components/about/AboutInfo.tsx";
import {Cotainer} from "../../../../components/Cotainer.tsx";
import {font} from "../../../../styles/Common.ts";
import {theme} from "../../../../styles/Theme.tsx";

export const About = () => {
    return (
        <AboutStyles id = {'about'}>
            <Cotainer>
                <AboutTitle>Обо мне</AboutTitle>
                <AboutText>Я начинающий фронтенд-разработчик с практическими навыками создания адаптивных и интерактивных пользовательских интерфейсов. Уверенно владею JavaScript, HTML и CSS, а также современными технологиями разработки, такими как React, TypeScript, styled-components и Axios. Имею опыт работы с системой контроля версий Git и размещения проектов на GitHub.

                    Работал с управлением состоянием через Redux и немного знаком с разработкой мобильных интерфейсов на React Native. Работал с REST API, Storybook, есть опыт работы в команде. Заинтересован в постоянном росте, изучении новых инструментов и лучших практик разработки. Стремлюсь создавать чистый, поддерживаемый и удобный код. Имею два высших образования не связанных с IT-разработкой.
                </AboutText>
                <AboutTitle>Опыт работы</AboutTitle>
                <AboutInfo aboutInfoTitle='Фронтенд-разработчик (фриланс / проекты)' aboutInfoName= 'Сентябрь 2024 - наст время'/>
                <AboutInfo aboutInfoTitle= 'Верстал одностраничные сайты по макетам (Figma), соблюдая адаптивность и кроссбраузерность.'/>
                <AboutInfo aboutInfoTitle= 'Участвовал в разработке мобильного приложения с использованием React Native.'/>
                <AboutInfo aboutInfoTitle= 'Работаю над созданием веб-сайта интернет-магазина мясной продукции: реализую каталог товаров, корзину, фильтрацию, оформление заказов.'/>
                <AboutInfo aboutInfoTitle= 'Разрабатывал пользовательские веб-приложения с применением React, Redux и TypeScript — формы, фильтры, интерфейсы для взаимодействия с API.'/>
                <AboutInfo aboutInfoTitle= 'Использовал Git для контроля версий и совместной работы, размещал проекты на GitHub.'/>
                <AboutTitle>Образование</AboutTitle>
                <AboutInfo aboutInfoTitle='Fundamentals of frontend development' aboutInfoTime='Full Time' aboutInfoName='IT-inkubator' aboutInfoDate='Oct 2024 - Feb 2025'/>
                <AboutInfo aboutInfoTitle='The main course of a frontend developer' aboutInfoTime='Full Time' aboutInfoName = 'IT-inkubator' aboutInfoDate='Feb 2025 - present time'/>
            </Cotainer>
        </AboutStyles>
    );
};

const AboutStyles = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
   

`

const AboutTitle = styled.h2`
    margin-bottom: 40px;
    margin-top: 20px;
    ${font ({family: '"Poppins", sans-serif', weight: 700, Fmax: 32, Fmin: 28, lineHeight: 1.2381, color: '#42446e', spacing: -0.01})};
    
    @media ${theme.media.mobile} {
        margin-bottom: 30px;
    }
`

const AboutText = styled.p`
    background-color: rgb(255, 255, 255);
    position: relative;
    max-width: 710px;
    ${font ({family: '"Poppins", sans-serif', weight: 400, Fmax: 18, Fmin: 15, lineHeight: 1.44444, color: '#666'})};
`



