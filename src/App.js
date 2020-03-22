import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';
import RequestHelp from './components/RequestHelp';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [volunteers, setVolunteers] = useState([{}]);

  async function getVoluntarios() {
    const res = await axios.get(
      'https://apirest-covol19.herokuapp.com/voluntariarse/voluntarios'
    );
    // eslint-disable-next-line no-console
    console.log(res.data);
    setVolunteers(res.data);
  }

  useEffect(() => {
    getVoluntarios();
  }, []);

  return (
    <div className="App">
      <Header />
      <Form />
      <RequestHelp volunteers={volunteers} />
      <Main volunteers={volunteers} />
      <Footer volunteers={volunteers} />
    </div>
  );
}

export default App;
