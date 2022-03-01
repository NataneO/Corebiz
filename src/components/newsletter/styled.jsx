import styled, { css } from 'styled-components';

export const Newsletter = styled.div`
height: 10rem;
color: #000;
width: 100%;
padding: 2rem 0;
box-sizing:border-box;
background: #C9C9C9;
color: #000;
position:relative;
text-align:center;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const Form = styled.form`
margin:0 auto;
width:50%;
display:flex;

> *{
  flex:1;
}
`

export const Input = styled.input`
margin-right:1rem;
border:none;
border-radius:.25rem;
padding:.5rem;
height:2rem;
box-sizing: border-box;
${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const Button = styled.button `
height:2rem;
border:none;
background-color:#000;
color:#fff;
text-align:center;
padding:.5rem;
border-radius:.25rem;
`






