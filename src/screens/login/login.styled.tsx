import styled from 'styled-components'
import { Grid } from '@mui/material'
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
`

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: #1A1A1A;
  `

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  border-radius: 5px;
  border: 1px solid #E0E0E0;
`

export const Button = styled.button`
width: 100%;
padding: 8px;
margin: 0 0 22px;

border-radius: 5px;

background-color: #E31A13;
color: #FFF;
border: 0;

cursor: pointer;
`

export const Error = styled.p`
  color: #E31A13;
  font-weight: 800;
`