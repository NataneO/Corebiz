import styled, { css } from 'styled-components';

export const Footer = styled.div`
height: 10rem;
color: #000;
width: 100%;
padding: 1rem 0;
box-sizing:border-box;
background: #333;
color: #000;
position:relative;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;
