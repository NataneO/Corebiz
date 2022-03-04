import styled, { css } from 'styled-components';

import {AngleLeft, AngleRight} from '@styled-icons/fa-solid'



export const ALeft = styled(AngleLeft)`
  color:#000;
  left: -60px;
  &:hover{
    color:#666;
  }
`
export const ARight = styled(AngleRight)`
  color:#000;
  right: -60px;
  &:hover{
    color:#666;
  }
`


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