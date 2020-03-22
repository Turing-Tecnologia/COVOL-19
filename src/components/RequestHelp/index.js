/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button';
import './help.css';

export default function RequestHelp({ volunteers }) {
  return (
    <div>
      <section className="formA hideA" data-netlify="true" name="filtragem">
        <h2>Preciso de Ajuda</h2>
        <form action="/" method="GET">
          <select name="select">
            {volunteers.map(options => (
              <option key={options.id_voluntario} value={options.cidade}>
                {options.cidade}
              </option>
            ))}
          </select>
          <Button>Listar voluntários</Button>
        </form>
      </section>
    </div>
  );
}
