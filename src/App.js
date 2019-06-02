import React, { useState } from 'react';
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Button,
} from '@material-ui/core';
import Oprema from './Oprema';
import Login from './Login';
import MainForm from './MainForm';
import './App.css';

export const MySelect = ({ onChange, name, children, label }) => (
  <FormControl>
    <InputLabel>{label}</InputLabel>
    <Select
      native
      onChange={onChange}
      inputProps={{
        name,
      }}
    >
      {children}
    </Select>
  </FormControl>
);

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Container maxWidth="md">
      <Grid
        style={{
          margin: '2em auto',
        }}
      >
        {loggedIn ? (
          <MainForm />
        ) : (
          <Login onSuccess={() => setLoggedIn(true)} />
        )}
      </Grid>
    </Container>
  );
}

export default App;
