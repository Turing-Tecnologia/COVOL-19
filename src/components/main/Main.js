import React, { useState, useEffect } from 'react';
import './main.css';

export default function Main() {
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

  useEffect(() => {
    /** set data from api */
  }, []);

  return (
    <div>
      <main>
        <h2>
          Últimos <span>voluntários</span>
        </h2>
        <section className="volunteers">
          {volunteers.map(voluntary => {
            return (
              <div key={voluntary.id} className="voluntary">
                <p>{voluntary.name}</p>
                <p>{voluntary.city}</p>
                <div className="number">{voluntary.whatsapp}</div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
