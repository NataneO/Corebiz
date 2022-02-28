import styled, { css } from 'styled-components';

export const Image = styled.img`
width: 13rem;


${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;
