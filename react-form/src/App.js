import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/formc.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Form />} />

      </Routes>
    </Router>
    // <div className="App">
    //   <Form/>
    // </div>
  );
}

export default App;
