import styled, { css } from 'styled-components'
import logo from '../../assets/img/logo.svg';

export const Header = styled.div`
height: 5rem;
color: #000;
width: 100%;
padding: 1rem 0;
box-sizing:border-box;
background: #fff;
color: #000;
position:relative;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const HeaderSection = styled.section`
 display:grid;
 height:100%;
 width:80%;
 margin:0 auto;
 padding: .5rem 0;
 grid-template-columns: 3fr 6fr 2fr 1fr;

 > * {
    flex:1;
  }

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const LogoHeader = styled.div`
    background-image: url(${logo});
    width:100%;
    height:100%;
    background-size:10rem auto;
    background-repeat: no-repeat;
`

export const Div = styled.div`
    text-align: center;
`

export const Input = styled.input`
   width:100%;
`
