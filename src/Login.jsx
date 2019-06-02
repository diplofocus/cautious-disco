import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  FormGroup,
  Button,
} from '@material-ui/core';
import axios from 'axios';

const mockLogin = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const pipeValue = fn => e => fn(e.target.value);

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    /* axios
     *   .post(`${process.env.REACT_APP_URL}login`, {
     *     email,
     *     password,
     *   }) */
    mockLogin()
      .then(() => {
        setLoading(false);
        onSuccess();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Paper
        style={{
          padding: '10%',
          width: '80%',
          margin: '0 auto',
        }}
      >
        <FormGroup onSubmit={console.log}>
          <TextField
            label="Email"
            onChange={pipeValue(setEmail)}
            value={email}
          />
          <TextField
            label="Password"
            type="password"
            onChange={pipeValue(setPassword)}
            value={password}
          />
          <Button
            disabled={loading}
            color="primary"
            variant="contained"
            type="submit"
            style={{ marginTop: '2em' }}
            onClick={login}
          >
            Login
          </Button>
        </FormGroup>
      </Paper>
    </Container>
  );
};

export default Login;
