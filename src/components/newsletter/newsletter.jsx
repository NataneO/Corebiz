import * as S from './styled'
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export function Newsletter() {
  const [message, setmessage] = useState('');

  const { register, handleSubmit, 
    formState: { errors },
    reset} = useForm();
  const onSubmit = (data) => {
    
    fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: data.email,
    name: `${data.name}`,
  }),
  redirect: 'follow'
}).then(response => (response.status == 200 ? showMessage(response.status, data): showMessage(response.status, error)))
.catch(error => console.log('error', error));

}

const showMessage = (status, data) =>{
 if (status == 200){
  setmessage(<S.ResultMessage> Você registrou o email {data.email} para recebimento da nossa newsletter. </S.ResultMessage>)
  setTimeout(() => {
    setmessage('')
  }, 5000);} else {
    setmessage(<span> Ocorreu algum erro no seu cadastro. Tente novamente mais tarde!  </span>)
  }
  
}

  const intialValues = {
    email: "",
    name: ""
  };

  

  return (
    <S.Newsletter>
       {message}
      <h3>Participe de nossas news com promoções e novidades!</h3>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputColection>
     
          <S.Input
            defaultValue={intialValues.name}
            placeholder="Digite seu nome"
            {...register("name", {
              validate: (value) => value.length > 2
            })}
          />
          {errors.name && <p>Preencha seu nome completo</p>}

        </S.InputColection>

        <S.InputColection>
            <S.Input
          defaultValue={intialValues.email}
          placeholder="Digite seu email"
          type="email"
          {...register("email", {
            validate: (value) => value.length > 6
          })}
        />
        {errors.email && <p>Preencha seu email completo</p>}

        </S.InputColection>


        <S.Button type="submit">Eu quero!</S.Button>
      </S.Form>
    </S.Newsletter>
  )
}

