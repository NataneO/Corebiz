import React, { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import * as S from './styled';

import woman from '../../../../assets/img/businesswoman.png'
import people from '../../../../assets/img/destaque2.jpeg'


export function Destaques() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };


    return (<S.Destaques wideView>

        <Slider {...settings}>
            <S.Slide>
                <S.Hightlights>
                    <S.Description>
                        <h3>Olá, o que você está buscando:</h3>
                        <h1>Criar ou migrar o seu ecommerce?</h1>
                    </S.Description>
                </S.Hightlights>
                <S.BackgroundContainer>
                <S.SlideBg src={woman} />
                </S.BackgroundContainer>
            </S.Slide>

            
            <S.Slide>
                <S.Hightlights>
                    <S.Description>
                        <h3>Olá, o que você está buscando:</h3>
                        <h1>Criar ou migrar o seu ecommerce?</h1>
                    </S.Description>
                </S.Hightlights>
                <S.BackgroundContainer>
                <S.SlideBg src={people} />
                </S.BackgroundContainer>
            </S.Slide>

            

        </Slider>
    </S.Destaques>)
}