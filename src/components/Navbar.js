import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';

const Navbar = () => {
  const theme = useTheme();
  
  const navbarStyle = {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    color: theme.colors.background,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: theme.shadows.small,
  };
  
  const logoStyle = {
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.bold,
    fontSize: theme.typography.fontSize.large,
    textDecoration: 'none',
  };
  
  const navLinkStyle = {
    color: theme.colors.background,
    marginLeft: theme.spacing.lg,
    textDecoration: 'none',
    fontSize: theme.typography.fontSize.normal,
  };
  
  const navLinksContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        MeterEase Mobile
      </Link>
      
      <div style={navLinksContainerStyle}>
        <Link to="/" style={navLinkStyle}>Dashboard</Link>
        <Link to="/consumers" style={navLinkStyle}>Consumers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
