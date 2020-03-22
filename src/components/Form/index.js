/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import { cepMask, WhatsappMask } from './mask';
import Button from '../Button';
import './form.css';

export default function Form() {
  const [check, setCheck] = useState(true);
  const [bairro, setBairro] = useState('')
  const [cep, setCep] = useState('')
  const [contato, setContato] = useState('')
  const [localidade,setLocalidade] = useState('')
  const [cidade, setCidade] = useState('')
  const [nome, setNome] = useState('')
  const [uf, setUf] = useState('')
  

  async function validadeCep() {
    if (novoVoluntario.cep && novoVoluntario.cep.length >= 8) {
      const cepvalidate = await axios.get(
        `https://viacep.com.br/ws/${novoVoluntario.cep}/json/`
      );
      setLocalidade(response.data.localidade)
      setCidade(response.data.localidade)
      setUf(response.data.uf)
      setBairro(response.data.bairro)
      setCheck(true);
    } else {
      setLocalidade('');
      setCheck(false);
    }
  }

<<<<<<< HEAD
  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        'https://apirest-covol19.herokuapp.com/voluntariarse/voluntario',
        novoVoluntario
      )
      .then(res => {
        console.log(res.status);
      })
      .catch(err => {
        console.log(err);
      });
  }
=======
   async function handleSubmit(event) {
      event.preventDefault();
      const data = {
        bairro,
        cep,
        cidade,
        contato,
        localidade,
        nome,
        uf
      }
      console.log(data)
      await axios.post('https://apirest-covol19.herokuapp.com/voluntariarse/voluntario',data)
      window.location.reload()
   }
>>>>>>> 86be46fdb8eab7c1d7a4146180995ffe6ed1fa87

  return (
    <div>
      <section className="form hide">
        <div>
          <h2>Entrar na lista de voluntários</h2>
        </div>
        <form action="/" method="POST">
          <div>
            <input type="text" required name="name" placeholder="Nome" />
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
          </div>
          <div>
            <div className="cep-container">
              {!check ? <p>Cep Inválido</p> : <p />}
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
            </div>
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
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Quero ser voluntário
          </Button>
        </form>
      </section>
    </div>
  );
}
