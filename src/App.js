import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';
import RequestHelp from './components/RequestHelp';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: 'Paulo',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 9999-9999',
    },
    {
      id: 2,
      name: 'Sérgio',
      city: 'Angicos',
      whatsapp: '(84) 9 8888-8888',
    },
    {
      id: 3,
      name: 'Emmanuel',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 8853-2982',
    },
    {
      id: 4,
      name: 'Marta',
      city: 'Assu',
      whatsapp: '(84) 9 5555-5555',
    },
    {
      id: 5,
      name: 'Marcela',
      city: 'Carnaubais',
      whatsapp: '(84) 9 3333-3333',
    },
    {
      id: 6,
      name: 'Marcelo',
      city: 'Pendências',
      whatsapp: '(84) 9 2222-2222',
    },
  ]);
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
