/* eslint-disable react/prop-types */
import React ,{useState,useEffect} from 'react';
import Button from '../Button';
import Main from '../Main';
import { cepMask } from '../Form/mask.js'
import './help.css';
import axios from 'axios'

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
  async function loadVoluntaresCep(event){
    event.preventDefault()
    const response = await axios.get(`https://apirest-covol19.herokuapp.com//voluntariarse/voluntarios/localidade/${cidade}`)
    setVolunteers(response.data)
    console.log(response.data.length)
    setCep('')
    setCidade('')
  }

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
    </>
  );
}
