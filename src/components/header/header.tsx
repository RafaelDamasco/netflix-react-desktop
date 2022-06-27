import React, { useCallback, useState } from 'react';
import {
  Divider, Grid, IconButton, SwipeableDrawer,
} from '@mui/material';
import Logo from 'components/logo/logo';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AvatarIcon from 'components/avatar/avatar';
import userSlice from 'store/user/user.slice';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    () => {
      dispatch(userSlice.actions.logoff());
    },
    [],
  );

  const [open, setOpen] = useState(false);
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignContent="center"
      alignItems="center"
    >
      <IconButton aria-label="menu" color="primary">
        <MenuIcon
          fontSize="large"
          color="primary"
          onClick={() => setOpen(true)}
        />
      </IconButton>
      <Logo width={230} />
      <AvatarIcon>R</AvatarIcon>
      <SwipeableDrawer
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        anchor="left"
      >
        <IconButton onClick={handleClick} aria-label="menu" color="primary">
          <LogoutIcon />
          Sair da conta
        </IconButton>
        <Divider />
      </SwipeableDrawer>
    </Grid>
  );
}
