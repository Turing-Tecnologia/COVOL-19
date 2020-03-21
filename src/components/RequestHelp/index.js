/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

export default function RequestHelp({ volunteers }) {
  return (
    <div>
      <section className="formA hideA">
        <h2>Preciso de Ajuda</h2>
        <form action="/" method="POST">
          <select name="select">
            {volunteers.map(options => (
              <option key={options.id} value={options.city}>
                {options.city}
              </option>
            ))}
          </select>
          <button type="submit">Listar voluntários</button>
        </form>
      </section>
    </div>
  );
}
