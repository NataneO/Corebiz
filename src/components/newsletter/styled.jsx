import styled, { css } from 'styled-components';

export const Newsletter = styled.div`
min-height: 8rem;
color: #000;
width: 100%;
padding: 1.5rem 0 2rem 0;
box-sizing:border-box;
background: #f2f2f2;
color: #000;
position:relative;
text-align:center;

h3{
  margin: 0 0 1rem 0;
}

${props => props.darkmode && css`
  background: #000;
  color: #fff;
`}
`;

export const Form = styled.form`
margin:0 auto;
width:50%;
display:flex;
justify-content: space-between;
 
div{
  flex:1;
  margin:0 .5rem;
}
@media(max-width: 800px) {
  flex-direction: column;
  
  div {
    margin: unset;
  }
}
`

export const Input = styled.input`
width:100%;
box-sizing:border-box;
border:none;
outline:none;
 border-radius: 0.25rem;
 padding: 0.5rem; 

@media(max-width:800px){
    width:100%;
    box-sizing:border-box;
    margin:0;
    margin-bottom:.5rem;
    
}
`;

export const Button = styled.button `
height:2rem;
border:none;
background-color:#000;
color:#fff;
text-align:center;
padding:.5rem;
width:8rem;
border-radius:.25rem;

@media(max-width: 800px) {
 flex:1;
 width:unset;
}
`

export const InputColection = styled.div`
position:relative;
p{
  position:absolute;
  width: 11rem;
  font-size: .8rem;
  margin: 0.2rem;
  text-align: left;
  color: #ff0000;
}
`

export const ResultMessage = styled.div`
position: fixed;
top:2rem;
width:80%;
font-size:.8rem;
padding:1rem;
text-align: center;
border: solid 1px #000;
margin: 0 10% ;
background: #f1f1f1;
`




