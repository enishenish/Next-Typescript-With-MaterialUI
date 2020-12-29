import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E0E0E0',
      main: '#757575',
      dark: '#424242',
      contrastText: '#EEEEEE',
    },
    secondary: {
      light: '#757575',
      main: '#D0D0D0',
      dark: '#E0E0E0',
      contrastText: '#222222',
    },
  },
  overrides: {
    MuiMenuItem: {
      root : {
        fontSize: '1rem',
        whiteSpace: 'normal'
      }
    }
  }
});

if(theme.overrides !== undefined) {
  if (theme.overrides.MuiMenuItem !== undefined) {
    theme.overrides.MuiMenuItem.root = {
      whiteSpace: 'normal',
      fontSize: '1rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.5rem',
        whiteSpace: 'normal',
      }
    }
  }
}

theme.breakpoints.values.xs = 360;
theme.breakpoints.values.sm = 600;
theme.breakpoints.values.md = 980;
theme.breakpoints.values.lg = 1400;
theme.breakpoints.values.xl = 1800;

// for responsive design
theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: '2rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '4rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '6rem'
  }
}
theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.8rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.75rem'
  }
}
theme.typography.h3 = {
  ...theme.typography.h3,
  fontSize: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem'
  }
}
theme.typography.h4 = {
  ...theme.typography.h4,
  fontSize: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.4rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.125rem'
  }
}
theme.typography.h5 = {
  ...theme.typography.h5,
  fontSize: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem'
  }
}
theme.typography.h6 = {
  ...theme.typography.h6,
  fontSize: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem'
  }
}
theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  fontSize: '0.75rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem'
  }
}
theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  fontSize: '0.6rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.75rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.875rem'
  }
}

export default theme;