import React, { useState, useEffect } from 'react';
import './main.css';

export default function Main() {
  const [donors, setDonors] = useState([
    {
      id: 1,
      name: 'Emmanuel',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 8853-2982',
    },
    {
      id: 1,
      name: 'Emmanuel',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 8853-2982',
    },
    {
      id: 1,
      name: 'Emmanuel',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 8853-2982',
    },
    {
      id: 1,
      name: 'Emmanuel',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 8853-2982',
    },
    {
      id: 1,
      name: 'Emmanuel',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 8853-2982',
    },
    {
      id: 1,
      name: 'Emmanuel',
      city: 'Afonso Bezerra',
      whatsapp: '(84) 9 8853-2982',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:3000/').then(response => response.json());
    setDonors(donors);
  }, [donors]);

  return (
    <div>
      <main>
        <h2>
          Últimos <span>voluntários</span>
        </h2>
        <section className="donors">
          {donors.map(donor => {
            return (
              <div key={donor.id} className="donor">
                <p>{donor.name}</p>
                <p>{donor.city}</p>
                <div className="blood">{donor.whatsapp}</div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
