import styled, { css } from 'styled-components'
import logo from '../../assets/img/logo.svg';

import {Person, ShoppingCart} from '@styled-icons/material'


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
`;

export const HeaderSection = styled.section`
display: grid;
height: 100%;
width: 51rem;
margin: 0 auto;
padding: 0;
grid-template-columns: 12rem 25rem 13rem;


${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const LogoHeader = styled.div`
    background-image: url(${logo});
    height:100%;
    background-size:8rem auto;
    background-repeat: no-repeat;
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
display: flex;
content: 
height:30px;
padding-left:25px; 
`

export const Nav = styled.nav `


`
export const NavItens = styled.ul`
 line-height:0;
 margin:0;
 padding:1rem 0;
 list-style: none;

 & > * {
   float:left;
   width:6rem;
   font-size:.8rem;
   text-align:center;
   position:relative;
 }
 
`

export const Label = styled.span`
margin-left:.5rem;
`

export const CounterItem = styled.div`
background:#ff0000;
color:#fff;
text-align:center;
padding-top:.6rem;
box-sizing:border-box;
border-radius:3rem;
position:absolute;
right: .6rem;
top:-.2rem;
width:1.2rem;
height:1.2rem;
font-size:.8rem;
`

