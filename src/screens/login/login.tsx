import { useCallback, useEffect, useState } from "react";
import * as yup from 'yup'
import { Grid } from "@mui/material";
import { Button, Input, Wrapper, Error, GlobalStyles } from "./login.styled";


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
    []
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
      <GlobalStyles/>
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
          {!!error && (
            <Error>{error}</Error>
          )}
            <Button onClick={handleSend}>Entrar</Button>
        </Grid>
      </Wrapper>
    </>
  )
}