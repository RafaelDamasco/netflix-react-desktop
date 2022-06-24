import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Grid } from '@mui/material';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'components/input/input';
import Button from 'components/button/button';
import FormError from 'components/form-error/form-error';
import { tokenSelector } from 'store/user/user.selector';
import userSlice from 'store/user/user.slice';
import { Error } from 'types/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { SHOWS_URL } from 'screens/shows/shows.type';
import { Wrapper } from './login.styled';

export default function Form() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const navigate = useNavigate();
  const from = useLocation();

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const resetError = useCallback(
    (errorMessage: string) => {
      setError(errorMessage);
    },
    [],
  );

  const handleSend = useCallback(
    async () => {
      try {
        const schema = yup.object().shape({
          email: yup.string()
            .required('E-mail é obrigatório')
            .email('E-mail inválido'),
          password: yup.string()
            .required('Senha é obrigatório')
            .min(6, 'A senha deve ter ao menos 6 caracteres'),
        });

        await schema.validate(data);

        resetError('');

        dispatch(userSlice.actions.authentication(data));
      } catch (yupError: unknown) {
        setError((yupError as Error).errors[0]);
      }
    },
    [data],
  );

  useEffect(
    () => {
      if (token) {
        navigate(SHOWS_URL, {
          state: { from },
        });
      }
    },
    [token],
  );

  useEffect(
    () => {
      const localToken = localStorage.getItem('USER_TOKEN_COOKIE');
      if (localToken) {
        dispatch(userSlice.actions.setData({
          token: localToken,
        }));
      }
    },
    [],
  );

  return (
    <Wrapper
      container
      justifyContent="center"
      alignContent="center"
    >
      <Grid item xs={2}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />

        <FormError message={error} />

        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
    </Wrapper>
  );
}
