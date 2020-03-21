/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import { cepMask, WhatsappMask } from './mask';
import Button from '../Button';
import './form.css';

export default function Form() {
  const [check, setCheck] = useState(true);
  const [novoVoluntario, setNovoVoluntario] = useState({
    bairro: '',
    cep: '',
    cidade: '',
    contato: '',
    localidade: '',
    nome: '',
    uf: '',
  });

  async function validadeCep() {
    if (novoVoluntario.cep.length >= 8) {
      const cepvalidate = await axios.get(
        `https://viacep.com.br/ws/${novoVoluntario.cep}/json/`
      );
      // prencher os outros valores
      setNovoVoluntario({
        cidade: cepvalidate.data.localidade,
        uf: 'pegar da res de localizacao',
        bairro: 'pegar da res de localizacao',
      });
      setCheck(true);
    } else {
      setNovoVoluntario({ cidade: '' });
      setCheck(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        'http://apirest-covol19.herokuapp.com/voluntariarse/voluntarios',
        novoVoluntario
      )
      .then(res => {
        console.log(res.status);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <section className="form hide">
        <div>
          {!check ? <p>Cep Inválido</p> : <p />}
          <h2>Entrar na lista de voluntários</h2>
        </div>
        <form action="/" method="POST">
          <input type="text" required name="name" placeholder="Nome" />
          <input
            type="text"
            required
            maxLength="8"
            name="cep"
            value={novoVoluntario.cep}
            onChange={event =>
              setNovoVoluntario({ cep: cepMask(event.target.value) })
            }
            placeholder="Cep"
          />
          <input
            type="text"
            required
            name="cidade"
            value={novoVoluntario.cidade}
            onChange={event =>
              setNovoVoluntario({ cidade: event.target.value })
            }
            onFocus={validadeCep}
            placeholder="Cidade"
          />
          <input
            type="text"
            required
            maxLength="15"
            name="whatsapp"
            value={novoVoluntario.contato}
            onChange={event =>
              setNovoVoluntario({ contato: WhatsappMask(event.target.value) })
            }
            placeholder="Whatsapp"
          />
          <Button type="submit" onClick={handleSubmit}>
            Quero ser voluntário
          </Button>
        </form>
      </section>
    </div>
  );
}
