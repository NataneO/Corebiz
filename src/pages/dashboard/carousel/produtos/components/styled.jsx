import styled, { css } from 'styled-components';

export const Image = styled.img`
object-fit: cover;
    width: 100%;
    margin: 0 auto;
    height: auto;
}

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const Product = styled.div`
text-align:center;
position:relative;


`;
export const ProductData = styled.div`
background-color:#E6E8EA;
padding:.5rem;
box-sizing:border-box;
position:relative;



`
export const ProductDescription = styled.div`
height:4.5rem;
display:flex;
flex-direction:column;
margin-bottom:.5rem;
justify-content: space-between;
 h6{
  color: #7a7a7a;
  font-weight:300;
}


`

export const Button = styled.button`
height:2rem;
border:none;
background-color:#000;
color:#fff;
text-align:center;
padding:.5rem 2rem;
border-radius:.25rem;
margin:.8rem 0;
`

export const ProductBasics = styled.div`
> * {
  flex:1;
  margin:0;
}`


export const PrimaryText = styled.h6``

export const ProductPrices = styled.div`
> * {
  flex:1;
  margin:0;
}
`

export const OffTag = styled.div`
shape-inside:auto;
position: absolute;
top: 0;
right: 0;
border-bottom: 2rem solid transparent;
border-left: 2rem solid transparent;
border-top: 2rem solid #f00;
border-right: 2rem solid #f00;
`

export const Rating = styled.div`
 font-size:.7rem;
 color:#F8475F;
`