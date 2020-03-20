import React, { useState } from 'react';
import Axios from 'axios'
import { cepMask ,WhatsappMask} from './mask'
import './form.css';

export default function Form() {
  const [cep, setCep] = useState()
  const [city, setCity] = useState()
  const [whatsapp, setWhatsapp] = useState()
  const [check, setCheck] = useState(true)


  async function validadeCep() {
    if (cep.length >= 8) {
      const cepvalidate = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      console.log("chamou")
      setCity(cepvalidate.data.localidade)
      setCheck(true)
    }else{
      setCep('')
      setCheck(false)
    }
  }
  return (
    <div>
      <section className="form hide">
        <div>
        {!check?<p>Cep Inválido</p>:<p></p>}
        <h2>Entrar na lista de voluntários</h2>
        </div>
        <form action="/" onSubmit="" method="POST">
          <input
            type="text"
            required
            name="name"
            placeholder="Nome"
          />
          <input
            type="text"
            required
            maxlength="8"
            name="cep"
            value={cep}
            onChange={event => setCep(cepMask(event.target.value))}
            placeholder="Cep"
          />
          <input
            type="text"
            required
            name="text"
            value={city}
            onFocus={validadeCep}
            placeholder='Cidade'
          />
          <input 
          type="text" 
          required 
          maxLength="15"
          name="whatsapp" 
          value={whatsapp}
          onChange={event => setWhatsapp(WhatsappMask(event.target.value))}
          placeholder="Whatsapp" 
          />
          <button type="submit">Quero ser voluntário</button>
        </form>
      </section>
    </div>
  );
}
