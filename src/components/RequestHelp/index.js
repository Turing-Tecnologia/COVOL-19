import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button';
import Main from '../Main';
import About from '../About';
import Footer from '../Footer';
import { cepMask } from '../Form/mask';
import './help.css';

export default function RequestHelp() {
  const [volunteers, setVolunteers] = useState([{}]);
  const [check, setCheck] = useState(true);
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');

  async function validadeCep() {
    if (cep && cep.length >= 8) {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setCidade(response.data.localidade);
      setCheck(true);
    } else {
      setCidade('');
      setCheck(false);
    }
  }
  async function loadVoluntaresCep(event) {
    event.preventDefault();
    const response = await axios.get(
      `https://apirest-covol19.herokuapp.com//voluntariarse/voluntarios/localidade/${cidade}`
    );
    setVolunteers(response.data);
    // console.log(response.data);
    setCep('');
    setCidade('');
  }

  function localization() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(pos) {
      const crd = pos.coords;
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${crd.latitude}&lon=${crd.longitude}`
        );
        // console.log(response.data) descomenta pra "Debugar" e entender se o fluxo ta seguindo
        try {
          const responseVol = await axios.get(
            `https://apirest-covol19.herokuapp.com//voluntariarse/voluntarios/localidade/${response.data.address.city_district}`
          );
          setVolunteers(responseVol.data);
          // console.log(responseVol) descomenta pra "Debugar" e entender se o fluxo ta seguindo
        } catch (errApi) {
          console.error('Erro na API', errApi);
        }
      } catch (errLoc) {
        console.error('Erro na localização', errLoc);
      }
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  useEffect(() => {
    localization();
  }, []);

  return (
    <>
      <div>
        <section className="formA hideA" data-netlify="true" name="filtragem">
          <h2>Preciso de Ajuda</h2>
          <form onSubmit={loadVoluntaresCep}>
            <div>
              <div className="cep-container">
                {!check ? <p>Cep Inválido</p> : <p />}
                <input
                  type="text"
                  required
                  maxLength="8"
                  minLength="8"
                  name="cep"
                  value={cep}
                  onChange={event => setCep(cepMask(event.target.value))}
                  placeholder="Cep"
                />
              </div>
              <input
                type="text"
                required
                name="cidade"
                value={cidade}
                onChange={event => setCidade(event.target.value)}
                onFocus={validadeCep}
                placeholder="Cidade"
              />
            </div>
            <Button type="submit">Listar voluntários</Button>
          </form>
        </section>
      </div>
      <Main volunteers={volunteers} />
      <About />
      <Footer volunteers={volunteers} />
    </>
  );
}
