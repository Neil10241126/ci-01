import { PaletteOptions } from '@mui/material/styles';

const COLORS_MAP = {
  primary: '#6B8CCD',
  secondary: '#BDBDBD',
  error: '#FF5252',
  blue: '#42A5F5',
  green: '#66BB6A',
  amber: '#FF8F00',
  lightBlue: '#D0F2FF',
  lightGreen: '#C8FACD',
  lightBrown: '#FFF7CD',
  lightPink: '#FFE7D9'
} as const;

export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: COLORS_MAP.primary,
    contrastText: '#ffffff'
  },
  secondary: {
    main: COLORS_MAP.secondary,
    contrastText: '#ffffff'
  },
  error: {
    main: COLORS_MAP.error,
    contrastText: '#ffffff'
  }
};

export const customPalette = (theme: any) => ({
  blue: theme.palette.augmentColor({
    color: {
      main: COLORS_MAP.blue,
      contrastText: '#ffffff'
    },
    name: 'blue'
  }),
  green: theme.palette.augmentColor({
    color: {
      main: COLORS_MAP.green,
      contrastText: '#ffffff'
    },
    name: 'green'
  }),
  amber: theme.palette.augmentColor({
    color: {
      main: COLORS_MAP.amber,
      contrastText: '#ffffff'
    },
    name: 'amber'
  }),
  lightBlue: theme.palette.augmentColor({
    color: {
      main: COLORS_MAP.lightBlue,
      contrastText: '#04297A'
    },
    name: 'lightBlue'
  }),
  lightGreen: theme.palette.augmentColor({
    color: {
      main: COLORS_MAP.lightGreen,
      contrastText: '#015225'
    },
    name: 'lightGreen'
  }),
  lightBrown: theme.palette.augmentColor({
    color: {
      main: COLORS_MAP.lightBrown,
      contrastText: '#7A4F01'
    },
    name: 'lightBrown'
  }),
  lightPink: theme.palette.augmentColor({
    color: {
      main: COLORS_MAP.lightPink,
      contrastText: '#7A0C2E'
    },
    name: 'lightPink'
  })
});
