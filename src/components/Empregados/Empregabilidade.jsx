import React, { useState } from 'react';
import '../Styles/Empregabilidade.css';
import botao from '../../../public/assets/images/botaovoltar.svg'
import { Link } from 'react-router-dom';


function Empregabilidade() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    comoConheceu: '',
    mensagem: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso!');
    setFormData({

      nome: '',
      email: '',
      telefone: '',
      comoConheceu: '',
      mensagem: ''
    });
  };

  return (
    <section className='section_fundo'>
      <div className='voltar_button'>
        <Link to="/">
          <img src={botao} alt="Voltar" />
        </Link>
      </div>

      <section className="form-section">
        <h1 className='titulo-form'>Faça seu cadastro</h1>
        <p className='paragrafo-form'>
          Envie uma mensagem e entraremos em contato para ajudar a encontrar o emprego que mais combina com seu perfil e habilidades.
        </p>
        <p className="alert">
          <strong>*No momento atuamos apenas na grande São Paulo</strong>
        </p>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="telefone"></label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone"
            />
          </div>
          <div className="input-group">
            <label htmlFor="comoConheceu"></label>
            <input
              type="text"
              id="comoConheceu"
              name="comoConheceu"
              value={formData.comoConheceu}
              onChange={handleChange}
              placeholder="Como conheceu a Abraços?"
            />
          </div>
          <div className="input-group">
            <label htmlFor="mensagem"></label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Mensagem"

            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </section>
    </section>
  );
}

export default Empregabilidade;