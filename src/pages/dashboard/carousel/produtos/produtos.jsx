import React, { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import * as S from './styled'
import { ProductsService } from '../../../../services/api_service'
import { Produto } from "./components/produto";

export function Produtos() {
    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <S.ARight
            className={className}   
            onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <S.ALeft
            className={className}   
            onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await ProductsService.getProduct();
                setProducts(response);
            } catch (error) {
                console.error("Erro");
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <S.Produtos>
        <h3>Mais vendidos</h3>
        <S.Hr/>
            <Slider {...settings} className="products" >
                {loading && <div>Loading</div>}
                {!loading && (
                    products.map(item =>
                        (<div key={item.productId}><Produto props={item} /></div>))
                )}
            </Slider>
            
        </S.Produtos>)
}

