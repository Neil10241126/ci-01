declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary'];
    green: Palette['primary'];
    amber: Palette['primary'];
    lightBlue: Palette['primary'];
    lightGreen: Palette['primary'];
    lightBrown: Palette['primary'];
    lightPink: Palette['primary'];
  }

  interface PaletteOptions {
    blue?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    amber?: PaletteOptions['primary'];
    lightBlue?: PaletteOptions['primary'];
    lightGreen?: PaletteOptions['primary'];
    lightBrown?: PaletteOptions['primary'];
    lightPink?: PaletteOptions['primary'];
  }
}

export {};
