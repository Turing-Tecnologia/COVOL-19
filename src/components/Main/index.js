/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './main.css';

export default function Main({ volunteers }) {
  return (
    <div>
      <main>
        <h2>
          Últimos voluntários em <br />
         <span>{volunteers[0].cidade}</span>
        </h2>
        <section className="volunteers">
          {volunteers.map(voluntary => {
            return (
              <div key={voluntary.id_voluntario} className="voluntary">
                <p>{voluntary.nome}</p>
                <p>{voluntary.cidade}</p>
                <div className="number">{voluntary.contato}</div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
