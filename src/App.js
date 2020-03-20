import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import RequestHelp from './components/RequestHelp';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <RequestHelp/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
