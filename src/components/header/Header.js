import React from 'react';
import './header.css';

export default function Header() {
  function handleFormHide() {
    document.querySelector('.form').classList.toggle('hide');
  }

  return (
    <div>
      <header>
        <img src="./logo.png" alt="logo" />
        <h2>A sua ajuda é fundamental</h2>
        <div className="text">
          <p>
            Pessoas a partir dos 60 anos de idade ou com problemas de saúde são
            as mais prejudicadas
          </p>
          <p>
            Cerca de 80% dos mortos pelo COVID-19 são pessoas com 60 anos de
            idade ou mais e 75% tinham doenças anteriores como diabetes,
            hipertensão ou problemas cardíacos
          </p>
          <p>
            Com a recomendação de quarentena, precisamos nos unir para ajudar
            quem mais necessita. Ajude um idoso próximo de você se
            disponibilizando para ir realizar suas compras
          </p>
        </div>
        <button type="submit" onClick={handleFormHide}>
          Quero ser voluntário
        </button>
      </header>
    </div>
  );
}
