import React from 'react';
import './form.css';

export default function Form() {
  return (
    <div>
      <section className="form hide">
        <h2>Entrar na lista de voluntários</h2>
        <form action="/" method="POST">
          <input type="text" required name="name" placeholder="Nome" />
          <input type="text" required name="text" placeholder="Cidade" />
          <input type="tel" required name="whatsapp" placeholder="Whatsapp" />
          <button type="submit">Quero ser voluntário</button>
        </form>
      </section>
    </div>
  );
}
