import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';

const ConsumerDetail = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const [reading, setReading] = useState('');
  const [photo, setPhoto] = useState(null);
  const [notes, setNotes] = useState('');
  
  // Mock consumer data based on the id parameter
  const consumer = {
    id: parseInt(id),
    name: `Consumer ${id}`,
    address: `${id}23 Main Street, Apartment ${id}B`,
    meterNumber: `EB-${id}2345`,
    lastReading: `${400 + parseInt(id) * 50} kWh`,
    lastReadingDate: '2023-04-15',
    contactPhone: `555-${id}000-${id}999`,
    meterLocation: 'Outside, east wall near entrance',
    connectionType: 'Residential',
    billingCycle: 'Monthly',
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the reading data to a server
    alert(`Reading of ${reading} kWh submitted successfully for ${consumer.name}`);
    navigate('/consumers');
  };
  
  const handlePhotoChange = (e) => {
    // In a real app, this would handle the file upload
    setPhoto(e.target.files[0]?.name || null);
  };
  
  const headerStyle = {
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  };
  
  const backButtonStyle = {
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    border: 'none',
    cursor: 'pointer',
    fontSize: theme.typography.fontSize.normal,
    marginBottom: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
  };
  
  const cardStyle = {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.shadows.small,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  };
  
  const sectionHeaderStyle = {
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.xs,
    borderBottom: `1px solid ${theme.colors.border}`,
  };
  
  const infoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: theme.spacing.md,
  };
  
  const infoItemStyle = {
    marginBottom: theme.spacing.md,
  };
  
  const infoLabelStyle = {
    color: theme.colors.lightText,
    fontSize: theme.typography.fontSize.small,
    marginBottom: theme.spacing.xs,
  };
  
  const infoValueStyle = {
    fontSize: theme.typography.fontSize.normal,
  };
  
  const formGroupStyle = {
    marginBottom: theme.spacing.md,
  };
  
  const labelStyle = {
    display: 'block',
    marginBottom: theme.spacing.xs,
    fontSize: theme.typography.fontSize.normal,
  };
  
  const inputStyle = {
    width: '100%',
    padding: theme.spacing.sm,
    fontSize: theme.typography.fontSize.normal,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.small,
  };
  
  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical',
  };
  
  const buttonStyle = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    border: 'none',
    borderRadius: theme.borderRadius.small,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    fontSize: theme.typography.fontSize.normal,
    cursor: 'pointer',
    fontWeight: theme.typography.fontWeight.medium,
  };
  
  return (
    <div>
      <button 
        style={backButtonStyle} 
        onClick={() => navigate('/consumers')}
      >
        ← Back to Consumer List
      </button>
      
      <h1 style={headerStyle}>{consumer.name}</h1>
      
      <div style={cardStyle}>
        <h2 style={sectionHeaderStyle}>Consumer Information</h2>
        
        <div style={infoGridStyle}>
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Address</div>
            <div style={infoValueStyle}>{consumer.address}</div>
          </div>
          
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Meter Number</div>
            <div style={infoValueStyle}>{consumer.meterNumber}</div>
          </div>
          
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Last Reading</div>
            <div style={infoValueStyle}>{consumer.lastReading}</div>
          </div>
          
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Last Reading Date</div>
            <div style={infoValueStyle}>{consumer.lastReadingDate}</div>
          </div>
          
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Contact Phone</div>
            <div style={infoValueStyle}>{consumer.contactPhone}</div>
          </div>
          
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Meter Location</div>
            <div style={infoValueStyle}>{consumer.meterLocation}</div>
          </div>
          
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Connection Type</div>
            <div style={infoValueStyle}>{consumer.connectionType}</div>
          </div>
          
          <div style={infoItemStyle}>
            <div style={infoLabelStyle}>Billing Cycle</div>
            <div style={infoValueStyle}>{consumer.billingCycle}</div>
          </div>
        </div>
      </div>
      
      <div style={cardStyle}>
        <h2 style={sectionHeaderStyle}>New Meter Reading</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="reading">Reading (kWh)</label>
            <input 
              id="reading"
              type="number" 
              style={inputStyle}
              value={reading}
              onChange={(e) => setReading(e.target.value)}
              placeholder="Enter the current meter reading"
              required
            />
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="photo">Meter Photo</label>
            <input 
              id="photo"
              type="file" 
              accept="image/*"
              onChange={handlePhotoChange}
            />
            {photo && <div style={{ marginTop: theme.spacing.xs }}>Selected: {photo}</div>}
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="notes">Notes</label>
            <textarea 
              id="notes"
              style={textareaStyle}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional notes or observations"
            />
          </div>
          
          <button type="submit" style={buttonStyle}>
            Submit Reading
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsumerDetail;
