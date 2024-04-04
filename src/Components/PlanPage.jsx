import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Paper } from '@mui/material';

const PlanPage = ({ userData }) => {
  const navigate = useNavigate();

  const paperStyle = {
    marginTop: '8px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    marginTop: '16px',
  };

  const handleAddPlan = () => {
    console.log('Add plan button clicked');
    navigate('/pricing');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5" component="h1" gutterBottom>
          Welcome, {userData.name}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          You do not have a plan selected. Please select a plan.
        </Typography>
        <Button
          onClick={handleAddPlan}
          variant="contained"
          color="primary"
          style={buttonStyle}
        >
          Add Plan
        </Button>
      </Paper>
    </Container>
  );
};

export default PlanPage;
