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
    if (cep.length >= 8) {
      const response = await axios.get(
        `https:viacep.com.br/ws/${cep}/json/`
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

  return (
    <div>
      <section className="form hide">
        <div>
          {!check ? <p>Cep Inválido</p> : <p />}
          <h2>Entrar na lista de voluntários</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            required 
            name="name"
            value={nome}
            onChange={event => setNome(event.target.value)} 
            placeholder="Nome" 
            />
          <input
            type="text"
            required
            maxLength="8"
            name="cep"
            value={cep}
            onChange={event =>
              setCep(cepMask(event.target.value))
            }
            placeholder="Cep"
          />
          <input
            type="text"
            required
            name="cidade"
            value={localidade}
            onChange={event =>
              setLocalidade(event.target.value )
            }
            onFocus={validadeCep}
            placeholder="Cidade"
          />
          <input
            type="text"
            required
            maxLength="15"
            name="whatsapp"
            value={contato}
            onChange={event =>
              setContato(WhatsappMask(event.target.value))
            }
            placeholder="Whatsapp"
          />
          <Button type="submit">
            Quero ser voluntário
          </Button>
        </form>
      </section>
    </div>
  );
}
