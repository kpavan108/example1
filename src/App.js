// src/App.js

import React from 'react';
import './App.css';
import Heading from './Components/Heading';
import SubHeading from './Components/Subheading';
import Paragraph from './Components/paragraph';
import Crud from './Components/CRUD';

function App() {
  return (
    <div className="App">
      <Heading />
      <SubHeading />
      <Paragraph />
      <Crud /> {/* Render the Crud component here */}
    </div>
  );
}

export default App;