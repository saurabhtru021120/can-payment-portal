import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const PricingPage = ({ userData }) => {
  let pricingTableComponent;

  if (userData.dpId === 'DP-001') {
    pricingTableComponent = (
      <stripe-pricing-table
        pricing-table-id="prctbl_1P13EVSHhQwmZ2ZOE3MAocC0"
        publishable-key="pk_test_51OyJIwSHhQwmZ2ZOmZIRoTyvgAuimHdC9l40iSqfC5U1KNyt3XGf4TJPHAPiLM1w5ep1WZSXGPlJxfzXotXmSA2p00LbPSCVqs"
        client-reference-id="1"
      ></stripe-pricing-table>
    );
  } else if (userData.dpId === 'DP-002') {
    pricingTableComponent = (
      <stripe-pricing-table
        pricing-table-id="prctbl_1P148LSHhQwmZ2ZOY2h2o90A"
        publishable-key="pk_test_51OyJIwSHhQwmZ2ZOmZIRoTyvgAuimHdC9l40iSqfC5U1KNyt3XGf4TJPHAPiLM1w5ep1WZSXGPlJxfzXotXmSA2p00LbPSCVqs"
        client-reference-id="2"
      ></stripe-pricing-table>
    );
  } else {
    // Handle other cases if needed
    pricingTableComponent = null;
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Welcome, {userData.name}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          {/* You can add some description here if needed */}
        </Typography>
      </Paper>
      {pricingTableComponent}
    </Container>
  );
};

export default PricingPage;
