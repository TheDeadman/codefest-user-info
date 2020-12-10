import React from 'react';
import Container from '@material-ui/core/Container';

import TopBar from './components/TopBar';
import UserTable from './components/UserTable';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <TopBar />
      <Container maxWidth="lg">

        <div className="App">
          <br />
          <UserTable />
        </div>
      </Container>
    </>
  );
}

export default App;
