import styled, { css } from 'styled-components';
import corebiz from '../../assets/img/logo-dot-white.svg';
import vtex from '../../assets/img/vtex.svg';
import {Message, Headphones} from '@styled-icons/material'


export const MessageIcon = styled(Message)`
  
  width:1rem;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`


export const HeadphonesIcon = styled(Headphones)`
  
  width:1rem;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`

export const Footer = styled.footer`
min-height: 8rem;
color: #FFF;
width: 100%;
box-sizing:border-box;
background: #000;
position:relative;
display:flex;

>*{
  flex:1;
}

@media(max-width: 800px) {
  flex-direction: column;
  > *{
    flex:unset;
  }
}



${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;


export const Article =styled.article`

text-align: ${props => props.textCenter ? "center" : "left"};
 
${props => props.distribution && css`
  display:flex;
  justify-content:flex-end;
  margin: 2rem 0;

`}

@media(max-width: 800px) {
  text-align: center;
  ${props => props.distribution && css`
  justify-content:center;

`}

}

`

export const Hr = styled.hr`
 width: 10%;
 margin: .5rem 0;
 @media(max-width: 800px) {
  margin: .5rem auto;
}
 
`

export const H5 = styled.h5`
margin:0;`
export const H6 = styled.h6`
margin:0;
font-weight:300;
`

export const ButtonContact = styled.div`
background: #fff;
margin: 0.5rem auto;
width: 7rem;
padding: 0.5rem;
color: #000;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: grid;
grid-template-columns: 3fr 9fr;
border-radius: 0.25rem;
font-size:.5rem;
text-transform: uppercase;
`

export const DistributionData = styled.div`
font-size:.6rem;
margin: 0 1rem; 

`
export const DistLogo = styled.div`
    width:3rem;
    height:1rem;
    background-size:3rem auto;
    background-repeat: no-repeat;
    ${props => props.creat && css`
  background-image: url(${corebiz})
`}

${props => props.distrib && css`
  background-image: url(${vtex})
`}
`