/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './main.css';

export default function Main({ volunteers }) {
  if (volunteers.length > 0) {
    return (
      <div>
        <main>
          {volunteers[0].cidade !== undefined ? (
            <div>
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
            </div>
          ) : (
            <h2>
              <span>Permita acesso à localização</span>
            </h2>
          )}
        </main>
      </div>
    );
  }
  return (
    <div>
      <main>
        <h2>
          Não há voluntários cadastrados em sua cidade
          <br />
          <span>
            Ajude a divulgar este projeto para que consigamos alcançar o máximo
            de pessoas
          </span>
        </h2>
      </main>
    </div>
  );
}
