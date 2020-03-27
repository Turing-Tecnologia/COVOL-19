/* eslint-disable no-console */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import './about.css';

export default function About() {
  const [contributors, setContributors] = useState([]);
  const [backendContributors, setBackendContributors] = useState([]);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const repoFront = await axios.get(
          'https://api.github.com/repos/Turing-Tecnologia/COVOL-19/contributors'
        );
        const repoBack = await axios.get(
          'https://api.github.com/repos/Turing-Tecnologia/COVOL-19-BACKEND/contributors'
        );

        if (repoFront.data) {
          setContributors(repoFront.data);
        }
        if (repoBack.data) {
          setBackendContributors(repoBack.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchContributors();
  }, []);

  const handleClick = useCallback((e, url) => {
    e.preventDefault();

    window.open(url, '_blank');
  }, []);

  return (
    <section className="about">
      <h1>Conheça os Colaboradores</h1>
      <p id="about-subtitle">
        &ldquo;Ajudar o próximo é a melhor maneira de ajudar a si mesmo&rdquo;
      </p>

      <h2>Frontend</h2>
      <div className="contributors">
        {contributors.map(contributor => (
          <button
            type="button"
            className="contributor-info"
            onClick={e => handleClick(e, contributor.html_url)}
            key={contributor.id}
          >
            <img src={contributor.avatar_url} alt="Avatar do voluntário" />
            <p className="contributor-login">{contributor.login}</p>
          </button>
        ))}
      </div>

      <h2>Backend</h2>
      <div className="contributors">
        {backendContributors.map(contributor => (
          <button
            type="button"
            className="contributor-info"
            onClick={e => handleClick(e, contributor.html_url)}
            key={contributor.id}
          >
            <img src={contributor.avatar_url} alt="Avatar do voluntário" />
            <p className="contributor-login">{contributor.login}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
