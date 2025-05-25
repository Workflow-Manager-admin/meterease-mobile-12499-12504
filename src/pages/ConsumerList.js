import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';

const ConsumerList = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for consumers
  const mockConsumers = [
    { id: 1, name: 'John Doe', address: '123 Main St, Apt 4B', meterNumber: 'EB-12345', lastReading: '532 kWh', status: 'Pending' },
    { id: 2, name: 'Jane Smith', address: '456 Oak Ave', meterNumber: 'EB-67890', lastReading: '275 kWh', status: 'Completed' },
    { id: 3, name: 'Robert Johnson', address: '789 Pine Blvd', meterNumber: 'EB-24680', lastReading: '621 kWh', status: 'Pending' },
    { id: 4, name: 'Sarah Williams', address: '321 Elm St', meterNumber: 'EB-13579', lastReading: '410 kWh', status: 'Completed' },
    { id: 5, name: 'Michael Brown', address: '654 Cedar Rd', meterNumber: 'EB-97531', lastReading: '358 kWh', status: 'Pending' },
    { id: 6, name: 'Emily Davis', address: '987 Maple Ave', meterNumber: 'EB-86420', lastReading: '489 kWh', status: 'Completed' },
  ];
  
  // Filter consumers based on search term
  const filteredConsumers = mockConsumers.filter(consumer => 
    consumer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consumer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consumer.meterNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const headerStyle = {
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
  };
  
  const searchContainerStyle = {
    marginBottom: theme.spacing.lg,
  };
  
  const searchInputStyle = {
    padding: theme.spacing.sm,
    width: '100%',
    maxWidth: '500px',
    fontSize: theme.typography.fontSize.normal,
    borderRadius: theme.borderRadius.small,
    border: `1px solid ${theme.colors.border}`,
  };
  
  const consumerCardStyle = {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.shadows.small,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderLeft: `4px solid ${theme.colors.primary}`,
  };
  
  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  };
  
  const consumerNameStyle = {
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  };
  
  const statusStyle = (status) => ({
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.borderRadius.small,
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.medium,
    backgroundColor: status === 'Completed' ? '#e8f5e9' : '#fff8e1',
    color: status === 'Completed' ? '#388e3c' : '#ffa000',
  });
  
  const infoRowStyle = {
    display: 'flex',
    marginBottom: theme.spacing.xs,
    fontSize: theme.typography.fontSize.normal,
  };
  
  const infoLabelStyle = {
    width: '120px',
    color: theme.colors.lightText,
  };
  
  const buttonStyle = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    border: 'none',
    borderRadius: theme.borderRadius.small,
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    fontSize: theme.typography.fontSize.normal,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };
  
  return (
    <div>
      <h1 style={headerStyle}>Consumer List</h1>
      
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search by name, address or meter number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
      </div>
      
      {filteredConsumers.length === 0 ? (
        <p>No consumers found matching your search criteria.</p>
      ) : (
        filteredConsumers.map(consumer => (
          <div key={consumer.id} style={consumerCardStyle}>
            <div style={cardHeaderStyle}>
              <div style={consumerNameStyle}>{consumer.name}</div>
              <div style={statusStyle(consumer.status)}>{consumer.status}</div>
            </div>
            
            <div style={infoRowStyle}>
              <div style={infoLabelStyle}>Address:</div>
              <div>{consumer.address}</div>
            </div>
            
            <div style={infoRowStyle}>
              <div style={infoLabelStyle}>Meter Number:</div>
              <div>{consumer.meterNumber}</div>
            </div>
            
            <div style={infoRowStyle}>
              <div style={infoLabelStyle}>Last Reading:</div>
              <div>{consumer.lastReading}</div>
            </div>
            
            <div style={{ marginTop: theme.spacing.md }}>
              <Link 
                to={`/consumers/${consumer.id}`} 
                style={buttonStyle}
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ConsumerList;
