import React, { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import * as S from './styled'
import { ProductsService } from '../../../../services/api_service'
import { Produto } from "./components/produto";

export function Produtos() {
    function NextArrow(props) {
        const { className, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          />
        );
      }
      
      function PrevArrow(props) {
        const { className, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          />
        );
      }
   
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        };
    


   
const [loading, setLoading] = useState(true);
const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await ProductsService.getProduct();
        setProducts(response);
      } catch (error) {
        console.error("deu ruim");
      }
      setLoading(false);
    }

    fetchData();
  }, []);

    return (<S.Produtos>
           <Slider {...settings}>
           {products.map(item => (<div key={item.productId}><Produto props={item}/></div>))}
          </Slider>
        
    </S.Produtos>)
}

