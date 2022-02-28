import React from "react";
import * as S from './styled';


export const Produto = (data) => {

    return (
        <div>
            <S.Image src={data.props.imageUrl}/>
            
            <div>{data.props.productName}</div>
            <div>{data.props.stars}</div>
            {data.props.listPrice == null? null: <div>de {data.props.listPrice}</div>}
            <div>por {data.props.price}</div>
            <span> ou de
            {data.props.installments.map((item, index) => (<span key={index}> {item.quantity}x de {item.value}</span>  ))}
            </span>
            </div>)
}
