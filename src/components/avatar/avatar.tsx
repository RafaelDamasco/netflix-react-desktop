import { Avatar } from '@mui/material';
import React from 'react';
import { Props } from './avatar.type';

export default function AvatarIcon({ children }: Props) {
  return (
    <Avatar>
      {children}
    </Avatar>
  );
}
