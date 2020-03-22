/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import { cepMask, WhatsappMask } from './mask';
import Button from '../Button';
import './form.css';

export default function Form() {
  const [check, setCheck] = useState(true);
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [contato, setContato] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState('');
  const [uf, setUf] = useState('');

  async function validadeCep() {
    if (cep && cep.length >= 8) {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response.data);
      setLocalidade(response.data.localidade);
      setCidade(response.data.localidade);
      setUf(response.data.uf);
      setBairro(response.data.bairro);
      setCheck(true);
    } else {
      setLocalidade('');
      setCheck(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      bairro,
      cep,
      cidade,
      contato,
      localidade,
      nome,
      uf,
    };
    console.log(data);
    await axios.post(
      'https://apirest-covol19.herokuapp.com/voluntariarse/voluntario',
      data
    );
    window.location.reload();
  }

  return (
    <div>
      <section className="form hide">
        <div>
          <h2>Entrar na lista de voluntários</h2>
        </div>
        <form
          action="."
          method="POST"
          data-netlify="true"
          name="novovoluntario"
        >
          <div>
            <input
              type="text"
              required
              name="name"
              placeholder="Nome"
              value={nome}
              onChange={event => setNome(event.target.value)}
            />
            <input
              type="text"
              required
              maxLength="15"
              name="whatsapp"
              value={contato}
              onChange={event => setContato(WhatsappMask(event.target.value))}
              placeholder="Whatsapp"
            />
          </div>
          <div>
            <div className="cep-container">
              {!check ? <p>Cep Inválido</p> : <p />}
              <input
                type="text"
                required
                maxLength="8"
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
          <Button type="submit" onClick={handleSubmit}>
            Quero ser voluntário
          </Button>
        </form>
      </section>
    </div>
  );
}
