/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button';
import './help.css';

export default function RequestHelp({ volunteers }) {
  return (
    <div>
      <section className="formA hideA">
        <h2>Preciso de Ajuda</h2>
        <form action="/" method="GET">
          <select name="select">
            {volunteers.map(options => (
              <option key={options.id} value={options.city}>
                {options.city}
              </option>
            ))}
          </select>
          <Button>Listar voluntários</Button>
        </form>
      </section>
    </div>
  );
}
