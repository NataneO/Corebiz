
import React, {useContext, useEffect} from "react";
import * as S from './styled';
import { StarsRating } from "stars-rating-react-hooks";
import Numeral from 'react-numeral';
import Context from "../../../../../contexts/Context";


export const Produto = (data) => {
    const [cart, setCart] = useContext(Context);

    useEffect(() =>{
        window.localStorage.setItem('cartQtd', `${cart}`);
    })
 const b= ((parseFloat(29927))/100)
    console.log(b)
    const config = {
        totalStars: 5,
        initialSelectedValue: data.props.stars,
        renderFull: "★",
        renderEmpty: "☆"
      };

   
      
    return (
        <S.Product>
            <S.Image src={data.props.imageUrl} />
            {data.props.listPrice == null ? null : <S.OffTag/>}
            <S.ProductData >
                <S.ProductDescription>
                    <S.ProductBasics>
                <h6>{data.props.productName}</h6>
                <S.Rating>
                <StarsRating config={config} />
                </S.Rating>
                </S.ProductBasics>
                <S.ProductPrices>
                
                {data.props.listPrice == null ? null : <h6>de 
                    <Numeral
        value={data.props.listPrice}
        format={"0"}
      /></h6>}
                <h4>por {data.props.price.toFixed(2)}</h4>
            <h6>
                {data.props.installments.length == 0 ? null : data.props.installments.map((item, index) => (<span key={index}>ou em {item.quantity}x de {item.value}</span>))}</h6>
                </S.ProductPrices>
                </S.ProductDescription>
                <Context.Consumer>
                {() => (<div>
                <S.Button onClick={() => setCart(cart + 1)}> Comprar</S.Button>
                </div>)}
                
                </Context.Consumer>

            </S.ProductData>
        </S.Product>)
}
