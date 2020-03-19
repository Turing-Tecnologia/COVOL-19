import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <div>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/turingtecnologia/"
                target="blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/Turing-Tecnologia/" target="blank">
                Github
              </a>
            </li>
            <li>
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
        </div>
      </footer>
    </div>
  );
}
