'use client';
import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Props extends ButtonProps {
  label?: string;
}


export const BaseButton = ({ label = 'Click me' }: Props) => {
  return (
    <Button variant={'contained'} color={'secondary'} startIcon={<AddCircleIcon />}>{label}</Button>
  );
};

