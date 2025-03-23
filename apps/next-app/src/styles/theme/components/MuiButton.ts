import { alpha, darken } from '@mui/material';

export const MuiButton = {
  styleOverrides: {
    root: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary'},
          style: {
            '&:hover': {
              backgroundColor: alpha('#6B8CCD', 0.85)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'secondary'},
          style: {
            '&:hover': {
              backgroundColor: alpha('#BDBDBD', 0.85)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'error'},
          style: {
            '&:hover': {
              backgroundColor: alpha('#FF5252', 0.85)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'blue'},
          style: {
            '&:hover': {
              backgroundColor: alpha('#42A5F5', 0.85)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'green'},
          style: {
            '&:hover': {
              backgroundColor: alpha('#66BB6A', 0.85)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'amber'},
          style: {
            '&:hover': {
              backgroundColor: alpha('#FF8F00', 0.85)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'lightBlue'},
          style: {
            '&:hover': {
              backgroundColor: darken('#D0F2FF', 0.1)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'lightGreen'},
          style: {
            '&:hover': {
              backgroundColor: darken('#C8FACD', 0.1)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'lightBrown'},
          style: {
            '&:hover': {
              backgroundColor: darken('#FFF7CD', 0.1)
            }
          }
        },
        {
          props: { variant: 'contained', color: 'lightPink'},
          style: {
            '&:hover': {
              backgroundColor: darken('#FFE7D9', 0.1)
            }
          }
        }
      ]
    }
  }
};
