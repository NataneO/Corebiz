import styled, { css } from 'styled-components';
import wave from '../../../../assets/img/wave.svg'

export const Destaques = styled.div`
height: 23rem;
color: #000;
width: 100%;
box-sizing:border-box;
color: #000;
position:relative;
overflow:hidden;

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const Slide = styled.div `
 width:100%;
 position:relative;
`

export const SlideBg = styled.img `
    width: 100%;
    object-fit: cover;
    height: 21rem;
`

export const Hightlights = styled.div `
 position: absolute;
 background-image:url(${wave});
 color:#fff;
 height:21rem;
 width:100%;
 background-repeat: no-repeat;
 box-sizing:border-box;
 
 
 @media(max-width: 990px) {
  background-image:unset;
  background-color:#0000005c;

}

`
export const Description = styled.div `
  padding:7rem 0 0 15%;
  width:50%;
  box-sizing:border-box;

  h1{
    margin: 0;
  }

  h3{
    margin: 0;
  }

  @media(max-width: 800px){
    width:100%;
  }
`


export const BackgroundContainer = styled.div`
 
`
