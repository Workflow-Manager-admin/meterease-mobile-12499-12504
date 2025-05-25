// Theme configuration for MeterEase Mobile
// Navy and white color scheme

const theme = {
  colors: {
    primary: '#003366', // Navy blue
    secondary: '#0055a4', // Lighter navy
    accent: '#007bff', // Highlight blue
    background: '#ffffff', // White
    text: '#333333', // Dark text
    lightText: '#777777', // Light text
    border: '#dddddd', // Light border
    error: '#d32f2f', // Error red
    success: '#388e3c', // Success green
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: {
      small: '0.8rem',
      normal: '1rem',
      large: '1.2rem',
      xlarge: '1.5rem',
      xxlarge: '2rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1)',
  },
};

export default theme;
