/* eslint-disable react/prop-types */
import React from 'react';
import { FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';
import './footer.css';

export default function Footer({ volunteers }) {
  return (
    <div className="footer-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2f3640"
          fillOpacity="1"
          d="M0,192L1440,256L1440,320L0,320Z"
        />
      </svg>
      <footer>
        <div>
          <ul>
            <li>
              <FaInstagram className="icon" />
              <a
                href="https://www.instagram.com/turingtecnologia/"
                target="blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <FaGithub className="icon" />
              <a href="https://github.com/Turing-Tecnologia/" target="blank">
                Github
              </a>
            </li>
            <li>
              <FaGlobe className="icon" />
              <a href="https://www.turingtecnologia.com/" target="blank">
                Site
              </a>
            </li>
          </ul>
        </div>
        <div className="owner">
          <p>
            Developed by <span>Turing Tecnologia</span>
          </p>
          {volunteers[0].cidade !== undefined ? (
            <p>
              Em <span> {volunteers[0].cidade}</span> já somos <br />
              <span> {volunteers[0].length}</span>
              voluntários
            </p>
          ) : (
            <p>
              Contagem total de voluntários:
              <span> {volunteers.length}</span>
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}

/*
trocar o footer para exibir a quantidade de usuários na localização
<div className="owner">
          <p>
            Developed by <span>Turing Tecnologia</span>
          </p>
          {volunteers[0].cidade !== undefined ? (
            <p>
              Contagem de inscritos em {volunteers[0].cidade}:
              <span> {volunteers[0].length}</span>
            </p>
          ) : (
            <p>
              Contagem total de voluntários:
              <span> {volunteers.length}</span>
            </p>
          )}
        </div>
*/
