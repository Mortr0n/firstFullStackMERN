import './App.css';
import Main from './views/Main';
import React from 'react';
import { Router } from '@reach/router';
import PersonDetail from './components/PersonDetail';
import UpdatePerson from './components/UpdatePerson';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/people/" />
        <PersonDetail path="/people/:id" />
        <UpdatePerson path="/people/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
