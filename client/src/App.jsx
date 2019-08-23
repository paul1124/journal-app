import React from 'react';
import Form from './components/Form/Form';
import JournalList from './components/JournalList/JournalList'
import './App.scss';

export default function App() {
  return (
    <div className="app">
      <h2 className="app-title" style={{marginTop: '10em'}}>Digital Journal</h2>
      <Form />
      <JournalList />
    </div>
  );
}
