import React from 'react';
import { useTheme } from '../ThemeProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const theme = useTheme();
  
  const headerStyle = {
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
  };
  
  const cardStyle = {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.shadows.small,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  };
  
  const statNumberStyle = {
    fontSize: theme.typography.fontSize.xxlarge,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  };
  
  const statLabelStyle = {
    color: theme.colors.lightText,
    fontSize: theme.typography.fontSize.normal,
  };
  
  const buttonStyle = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    border: 'none',
    borderRadius: theme.borderRadius.small,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    fontSize: theme.typography.fontSize.normal,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: theme.spacing.md,
  };
  
  // Mock data for dashboard
  const stats = [
    { id: 1, number: 124, label: 'Pending Readings' },
    { id: 2, number: 567, label: 'Completed Today' },
    { id: 3, number: 15, label: 'Alerts' },
    { id: 4, number: 92, label: 'Completion Rate (%)' },
  ];
  
  return (
    <div>
      <h1 style={headerStyle}>Dashboard</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
        gap: theme.spacing.lg 
      }}>
        {stats.map(stat => (
          <div key={stat.id} style={cardStyle}>
            <div style={statNumberStyle}>{stat.number}</div>
            <div style={statLabelStyle}>{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div style={{ 
        ...cardStyle, 
        marginTop: theme.spacing.lg 
      }}>
        <h2 style={{ 
          marginBottom: theme.spacing.md,
          color: theme.colors.primary,
        }}>
          Recent Activity
        </h2>
        <p style={{ marginBottom: theme.spacing.md }}>
          Your recent meter reading activities will appear here. You can view all assigned consumers and their meter reading status.
        </p>
        <Link to="/consumers" style={buttonStyle}>
          View All Consumers
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
