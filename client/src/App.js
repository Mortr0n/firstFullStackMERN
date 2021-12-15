import './App.css';
import Main from './views/Main';
import React from 'react';
import { Router } from '@reach/router';
import PersonDetail from './components/PersonDetail';
import UpdatePerson from './views/UpdatePerson';

function App() {
  return (
    <div className="App">
      <Router>
        <Main default path="/people/" />
        <PersonDetail path="/people/:id" />
        <UpdatePerson path="/people/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
