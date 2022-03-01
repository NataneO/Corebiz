import styled, { css } from 'styled-components';

export const Footer = styled.footer`
height: 10rem;
color: #000;
width: 100%;
box-sizing:border-box;
background: #333;
color: #000;
position:relative;
display:flex;

>*{
  flex:1;
}


${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;


export const Article =styled.article`

text-align: ${props => props.textCenter ? "center" : "left"};
text-align: ${props => props.textCenter ? "center" : "left"};
> h5{
  line-height:0;
}

${props => props.distribution && css`
  display:flex;
  justify-content:flex-end;
`}
`

export const Hr = styled.hr`
 width: 10%;
 margin: 0;
`