import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const users = [
  { id: 1, name: 'user1', password: 'password1', dpId: 'DP-001' },
  { id: 2, name: 'user2', password: 'password2', dpId: 'DP-002' },
  { id: 3, name: 'user3', password: 'password3', dpId: 'DP-003' },
];

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const paperStyle = {
    marginTop: '8px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const formStyle = {
    width: '100%',
    marginTop: '8px',
  };

  const submitButtonStyle = {
    margin: '24px 0 16px',
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.name === username && user.password === password
    );

    if (user) {
      console.log('Login successful');
      handleLogin(user);
      navigate('/plan');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={paperStyle}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form style={formStyle} onSubmit={handleLoginSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={submitButtonStyle}
          >
            Login
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
      </Paper>
    </Container>
  );
}

export default LoginPage;
