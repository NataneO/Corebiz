import styled, { css } from 'styled-components';

export const Produtos = styled.div`
color: #000;
width: 100%;
box-sizing:border-box;
color: #000;
position:relative;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const Hr = styled.hr`
  width:10%;
  margin: 0;
`