import React, { useEffect, useState } from "react";
import '../Styles/Empregabilidade.css';
import { Link } from "react-router-dom";
import voltar from '../../../public/assets/images/voltar_cad.png';

const Cadastro = () => {
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const checklistItems = [
    "Apoio para Iniciar Sua Carreira no Brasil",
    "Desenvolvimento Pessoal e Profissional",
    "Vagas Para Todos os Níveis de Experiência",
    "Apoio a Imigrantes e Diversidade",
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="image-section">

        <div>
          <Link to='/'>
            <img className='login__voltarImagem' src={voltar} alt="Voltar" />
          </Link>
        </div>

        <img
          src="assets/images/empre.svg"
          alt="Trabalhadoras"
          className="main-image"
        />
      </div>

      <div className="text-section">
        <div>
          <h1>Faça seu cadastro</h1>
          <p>
            Queremos te ajudar a encontrar o emprego que mais combina com o seu
            perfil e habilidades.
          </p>
        </div >
        <ul className={`checklist ${animate ? "animate" : ""}`}>
          {checklistItems.map((item, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.3}s` }}>
              {item}
            </li>
          ))}
        </ul>
        <button className="cta-button" onClick={openModal}>Começar agora!</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">

            <form>
              <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" placeholder="Digite seu nome" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefone:</label>
                <input type="tel" id="phone" placeholder="Digite seu telefone" />
              </div>
              <div className="form-group">
                <label htmlFor="source">Como conheceu a Abraços?</label>
                <select id="source">
                  <option value="internet">Internet</option>
                  <option value="amigo">Amigo</option>
                  <option value="evento">Evento</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" placeholder="Digite sua mensagem"></textarea>
              </div>
              <div className="form-buttons">
                <button type="button" onClick={closeModal}>Fechar</button>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cadastro;
