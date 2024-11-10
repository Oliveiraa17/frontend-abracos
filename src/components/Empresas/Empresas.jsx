import React, { useState } from 'react';
import '../Styles/Empresas.css';
import botao from '../../../public/assets/images/botaovoltar.svg';
import bolas from '../../../public/assets/images/bolas.svg';
import { Link } from 'react-router-dom';

function Empresas() {
  const [formData, setFormData] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    telefone: '',
    endereco: '',
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
      razaoSocial: '',
      nomeFantasia: '',
      email: '',
      telefone: '',
      endereco: '',
      mensagem: ''
    });
  };

  return (
    <section className='section_fundou'>
      <section className='unf_r'>
      <div className='bolas_empresas'>
        <div className='dv_bola'>
          <img src={bolas} alt="Bola azul e laranja" />
          <h1>Empresas</h1>
        </div>
      </div>
      </section>

      <div className='texto_empresas'>
        <p>A Abraços conta com um banco de currículos de profissionais de todas as idades e áreas de atuação, possibilitando a recolocação deles em diversos tipos de empresas e organizações. Os profissionais cadastrados possuem todos os documentos necessários para trabalhar legalmente no Brasil.</p>
      </div>

      <div className='texto_preencher'>
        <p>
        Preencha o formulário abaixo para cadastrar a sua empresa
        </p>
      </div>

      <div className='texto_atua'>
        <p><strong>*No momento atuamos apenas na grande São Paulo</strong></p>
        <p className='juridicas'>1.Cadastramos apenas pessoas juridicas (empresas)</p>
      </div>

      <div className='fund_y'>
        <div className='junt_s'>
          <div className='texto_servicos'>
            <h1>Serviços prestados</h1>
          </div>
          <div className='topicos'>
            <li>Sensibilização da equipe e alta liderança;</li>
            <li>Triagem personalizada de currículos;</li>
            <li>Acompanhamento e acesso aos serviços.</li>
          </div>
        </div>
      </div>

      <div>
      <h1 className='titulo-formm'>Preencha o formulário</h1>
      <p className='paragrafo-formm'>
          Envie as informações e entraremos em contato.
        </p>
      </div>
      <section className="form-sectionn">
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="razaoSocial"></label>
            <input
              type="text"
              id="razaoSocial"
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              placeholder="Razão Social*"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="nomeFantasia"></label>
            <input
              type="text"
              id="nomeFantasia"
              name="nomeFantasia"
              value={formData.nomeFantasia}
              onChange={handleChange}
              placeholder="Nome Fantasia*"
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
              placeholder="E-mail*"
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
              placeholder="Telefone*"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="endereco"></label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Endereço*"
              required
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

export default Empresas
