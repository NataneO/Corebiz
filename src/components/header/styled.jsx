import styled, { css } from 'styled-components'
import logo from '../../assets/img/logo.svg';

export const Header = styled.div`
height: 4rem;
color: #000;
width: 100%;
padding: .75rem 0;
box-sizing:border-box;
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
 width:66rem;
 margin:0 auto;
 padding: 0;
 grid-template-columns: 14rem 40rem 6rem 6rem;


${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const LogoHeader = styled.div`
    background-image: url(${logo});
    width:100%;
    height:100%;
    background-size:9.5rem auto;
    background-repeat: no-repeat;
`

export const Div = styled.div`
    text-align: center;
`

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    padding: 0.6rem 0;
    border: none;
    border-bottom: 1px solid #000;
`
