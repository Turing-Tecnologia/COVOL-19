import React from 'react';
import './header.css';

export default function Header() {
  function handleFormHideA() {
    // A = AJUDAR
    document.querySelector('.formA').classList.add('hideA');
    setTimeout(() => {
      document.querySelector('.form').classList.toggle('hide');
    }, 200);
  }
  function handleFormHideP() {
    // P = PRECISAR
    document.querySelector('.form').classList.add('hide');
    setTimeout(() => {
      document.querySelector('.formA').classList.toggle('hideA');
    }, 200);
  }
  return (
    <div>
      <header>
        <img src="./logo.png" alt="logo" />
        <h2>A sua ajuda é fundamental</h2>
        <div className="text">
          <p>
            Cerca de 80% dos mortos pelo COVID-19 são pessoas com 60 anos de
            idade ou mais e 75% já possuiam problemas de saúde como diabetes,
            hipertensão ou problemas cardíacos
          </p>
          <p>
            Com a recomendação de quarentena, precisamos nos unir para ajudar
            quem mais necessita. Ajude um idoso próximo de você se
            disponibilizando para ir realizar suas compras
          </p>
        </div>
        <div className="buttons">
          <button type="submit" onClick={handleFormHideA}>
            Quero ser voluntário
          </button>
          <button type="submit" onClick={handleFormHideP}>
            Preciso de ajuda
          </button>
        </div>
      </header>
    </div>
  );
}
