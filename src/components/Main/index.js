/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './main.css';

export default function Main({ volunteers }) {
  
  if(volunteers.length > 0){
    return (
    <div>
      <main>
        <h2>
          Últimos voluntários <br />
         <span>{'em '+ volunteers[0].cidade}</span>
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
  return (
    <div>
      <main>
        <h2>
          Últimos <span>voluntários</span></h2>
        <h1>Nenhum Voluntario Da Sua Cidade Cadastrado Ainda!</h1>
      </main>
    </div>
    
  )
  
}
