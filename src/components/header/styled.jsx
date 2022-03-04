import styled, { css } from 'styled-components'
import logo from '../../assets/img/logo.svg';

import { Person, ShoppingCart } from '@styled-icons/material'


export const PersonIcon = styled(Person)`
  
  width:1rem;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`


export const CartIcon = styled(ShoppingCart)`
  
  width:1rem;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`

export const Header = styled.header`
height: 4rem;
color: #000;
width: 100%;
padding: 1rem 0;
box-sizing:border-box;
color: #000;
position:relative;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}

@media(max-width: 900px){
  height:7rem;
}
`;

export const HeaderSection = styled.section`
display: grid;
height: 100%;
width: 51rem;
margin: 0 auto;
padding: 0;
grid-template-columns: 37rem 6.5rem 6.5rem;
@media(max-width: 900px){
  display: block;
  position:relative;
  width:100%;
}

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const Principal = styled.div`
display:grid;
height: 100%;
padding:0;
grid-template-columns: 12rem 25rem;

@media(max-width: 900px){
  width:100%;
  display:grid;
  grid-template-columns:unset;
  grid-template-rows:3rem 3rem;
  margin: 0 auto;

  form{
    padding: 0 10%;
  }
}
`


export const LogoHeader = styled.div`
    background-image: url(${logo});
    height:100%;
    background-size:8rem auto;
    background-repeat: no-repeat;
    
    @media(max-width: 900px){
      width:9rem;
      margin: 0 auto;
    }
`

export const Div = styled.div`
    text-align: center;
`

export const Input = styled.input`
margin: 0 auto;
width: 95%;
height: 2rem;
padding: 0.6rem 0;
border: none;
font-size:.8rem;
border-bottom: 1px solid #000;
height:30px;

@media(max-width:900px){
  width:100%;
}
`

export const NavItem = styled.div`
 display:flex;
 width:100%;
 font-size:.8rem;
 text-align:center;
 position:relative;

 ${props => props.cart && css`
justify-content:flex-end;
`}

 @media(max-width: 900px){
   position:absolute;
  ${props => props.profile && css`
    top:1rem; left:1rem;
    width:10%;

  `}
  ${props => props.cart && css`
  top:1rem; 
  right:1rem;
  width:3rem;
`}
 }
 
 
`

export const Label = styled.span`
margin-left:.5rem;
`

export const CounterItem = styled.div`
    background: #ff0000;
    color: #fff;
    text-align: center;
    padding-top: 0.1rem;
    box-sizing: border-box;
    border-radius: 3rem;
    right: 0.6rem;
    top: -0.2rem;
    width: 1.2rem;
    height: 1.2rem;
    font-size: .8rem;
`

