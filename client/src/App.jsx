import React, { useState } from 'react';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import JournalList from './components/JournalList/JournalList'
import './App.scss';

export default function App() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);
  return (
    <div className="app">
      {isLoggedIn ? <Login /> : (
        <div className="main">
          <h2 className="app-title" style={{marginTop: '10em'}}>Digital Journal</h2>
          <Form />
          <JournalList />
        </div>
      )}
    </div>
  );
}
