/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';

export default function Main({ volunteers }) {
  const [city, setCity] = useState();

  function localization() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(pos) {
      const crd = pos.coords;

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${crd.latitude}&lon=${crd.longitude}`
      );
      setCity(response.data.address.city_district);
    }

    function error(err) {
      // eslint-disable-next-line no-console
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  useEffect(() => {
    localization();
  }, []);

  return (
    <div>
      <main>
        <h2>
          Últimos voluntários em <br />
          <span>{city}</span>
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
