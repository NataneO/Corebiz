import React, { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import * as S from './styled'

export function Destaques() {

   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (<S.Destaques wideView> 
        <Slider {...settings}>
            <S.Slide>
                <h3>Olá, o que você está buscando:</h3>
                <h2>Criar ou migrar o seu ecommerce?</h2>
            </S.Slide>

            <S.Slide>
                <h3>Olá, o que você está buscando:</h3>
                <h2>Criar ou migrar o seu ecommerce?</h2>
            </S.Slide>
        </Slider>
    </S.Destaques>)
}