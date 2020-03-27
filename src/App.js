import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import RequestHelp from './components/RequestHelp';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <RequestHelp />
      <About />
    </div>
  );
}

export default App;
