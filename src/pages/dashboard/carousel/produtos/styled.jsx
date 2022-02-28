import styled, { css } from 'styled-components';

export const Produtos = styled.div`
height: 20rem;
color: #000;
width: 100%;
padding: 1rem 10%;
box-sizing:border-box;
background: #00f;
color: #000;
position:relative;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;
