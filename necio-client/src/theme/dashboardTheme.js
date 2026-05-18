import { alpha, createTheme } from '@mui/material/styles';

/** Aligns dashboard MUI with portfolio: navbar navy/cyan + homepage zinc neutrals */
export const portfolioNavy = '#001E4B';
export const portfolioCyan = '#00B4D8';

const zinc50 = '#fafafa';
const zinc100 = '#f4f4f5';
const zinc900 = '#18181b';

export const dashboardTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: portfolioNavy, contrastText: zinc50 },
    secondary: { main: portfolioCyan, contrastText: portfolioNavy },
    background: { default: zinc100, paper: zinc50 },
    text: {
      primary: zinc900,
      secondary: '#52525b',
    },
    divider: '#e4e4e7',
    action: {
      active: portfolioCyan,
      hover: alpha(portfolioCyan, 0.12),
      selected: alpha(portfolioCyan, 0.2),
      focus: alpha(portfolioCyan, 0.24),
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: [
      'ui-sans-serif',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: zinc900,
    },
    h5: {
      fontWeight: 600,
      color: zinc900,
    },
    h6: {
      fontWeight: 600,
      color: zinc900,
    },
    subtitle2: {
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: '#71717a',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: '1.5rem',
          border: `2px solid ${zinc900}`,
          boxShadow: 'none',
          backgroundColor: zinc100,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: zinc50,
          borderRight: `2px solid ${zinc900}`,
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: portfolioNavy,
          backgroundImage: 'none',
          borderBottom: `2px solid ${portfolioCyan}`,
          color: zinc50,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedSecondary: ({ theme }) => ({
          borderColor: portfolioCyan,
          color: theme.palette.secondary.main,
          '&:hover': {
            borderColor: portfolioCyan,
            backgroundColor: alpha(portfolioCyan, 0.1),
          },
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(portfolioNavy, 0.06),
          },
          '&.Mui-selected': {
            backgroundColor: portfolioCyan,
            color: portfolioNavy,
            '& .MuiListItemIcon-root': {
              color: portfolioNavy,
            },
            '&:hover': {
              backgroundColor: alpha(portfolioCyan, 0.92),
            },
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: `2px solid ${zinc900}`,
          borderRadius: '1rem',
          backgroundColor: zinc50,
          '& .MuiDataGrid-cell:focus-within': {
            outlineColor: portfolioCyan,
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: zinc100,
            borderBottomColor: zinc900,
            fontWeight: 600,
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: alpha(portfolioNavy, 0.06),
          },
        },
      },
    },
  },
});
