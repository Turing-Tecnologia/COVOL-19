/* eslint-disable no-unused-vars */
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
  const [alerta, setAlerta] = useState('');
  const [timeAlerta, setTimeAlerta] = useState(false);
  const [classAlert, setClassAlert] = useState('sucess');
  const [disableBtn, setDisableBtn] = useState(false);

  async function validadeCep() {
    if (cep && cep.length >= 8) {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
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
    setDisableBtn(true);
    const data = {
      bairro,
      cep,
      cidade,
      contato,
      localidade,
      nome,
      uf,
    };
    await axios
      .post(
        'https://apirest-covol19.herokuapp.com/voluntariarse/voluntario',
        data
      )
      .then(response => {
        setAlerta(
          `Obrigado ${data.nome}, você está na lista de voluntários de sua cidade agora.`
        );
      })
      .catch(error => {
        setAlerta(
          `${data.nome}, não foi possível realizar o cadastro, tente novamente!`
        );
        setClassAlert('error');
        setDisableBtn(false);
      });
    setTimeAlerta(true);
  }

  function showAlerta() {
    setInterval(() => {
      setTimeAlerta(false);
      if (classAlert === 'sucess') window.location.reload();
    }, 3500);

    return <div className={classAlert}>{alerta}</div>;
  }

  return (
    <div>
      <section className="form hide">
        <div>
          <h2>Entrar na lista de voluntários</h2>
        </div>
        <form onSubmit={handleSubmit}>
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
              minLength="15"
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
          <Button disable={disableBtn} type="submit">
            Quero ser voluntário
          </Button>
        </form>
      </section>
      {timeAlerta ? showAlerta() : null}
    </div>
  );
}
