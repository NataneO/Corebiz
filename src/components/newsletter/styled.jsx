import styled, { css } from 'styled-components';

export const Newsletter = styled.div`
height: 8rem;
color: #000;
width: 100%;
padding: 1rem 0;
box-sizing:border-box;
background: #C9C9C9;
color: #000;
position:relative;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;
