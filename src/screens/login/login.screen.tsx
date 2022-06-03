import { useCallback, useState } from "react";
import * as yup from 'yup'
import { Grid } from "@mui/material";
import {  Wrapper } from "./login.styled";

import FormError from "../../components/form-error/form-error"
import Input from "../../components/input/input"
import Button from "../../components/button/button"

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState('')

  const handleChange = useCallback(({target} : any) => {
    setData(prevData => ({
      ...prevData,
      [target.name]: target.value
    }))
  },
    [setData]
  )

  const handleSend = useCallback(
    async () => {
      try {
        const schema =  yup.object().shape({
          email: yup.string().required().email(),
          password: yup.string().required()
        })

        await schema.validate(data)

        setError('')

      } catch (error: any) {
        setError(error.errors[0])
      }
    }, [data]
  )

  return (
    <>
      <Wrapper 
        container 
        justifyContent='center' 
        alignContent='center'
        >
        <Grid item xs={2}>
          <Input 
            type="email" 
            name="email" 
            placeholder="E-mail"
            onChange={handleChange}/>
          <Input 
            type="password" 
            name="password" 
            placeholder="Senha"
            onChange={handleChange}/>
          
           
            <FormError message={error}></FormError>
          
            <Button onClick={handleSend}>Entrar</Button>
        </Grid>
      </Wrapper>
    </>
  )
}