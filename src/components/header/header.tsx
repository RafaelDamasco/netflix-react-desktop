import React, { useState } from 'react';
import {
  Divider, Grid, SwipeableDrawer,
} from '@mui/material';
import Logo from 'components/logo/logo';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
  const [open, setOpen] = useState(true);
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignContent="center"
      alignItems="center"
    >
      <MenuIcon
        fontSize="large"
        color="primary"
        onClick={() => setOpen(true)}
      />
      <Logo width={230} />
      <MenuIcon fontSize="large" color="primary" />
      <SwipeableDrawer
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        anchor="left"
      >
        <Grid container alignItems="center" gap={1}>
          <LogoutIcon />
          Sair da conta
        </Grid>
        <Divider />
      </SwipeableDrawer>
    </Grid>
  );
}
