import styled, { css } from 'styled-components';

export const Destaques = styled.div`
height: 17rem;
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

export const Slide = styled.div `
  height:100%;
  padding:5rem 3rem;
`