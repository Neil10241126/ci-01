'use client';
import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette, customPalette } from './palette';
import { breakpoints } from './breakpoints';
import customComponents from './components';

let theme = createTheme({
  typography,
  palette,
  breakpoints: breakpoints,
  spacing: 4
});

theme = createTheme(theme, {
  palette: customPalette(theme),
  components: customComponents
});

export default theme;
