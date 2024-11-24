import React, { useEffect, useState } from "react";
import '../Styles/Empresas.css';

function Empresas() {
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checklistItems = [
    "Imigrantes e refugiados são conhecidos pela dedicação e esforço",
    "Pessoas resilientes e capazes de se adaptar rapidamente",
    "Profissionais com uma perspectiva global trazem novas ideias",
    "Profissionais treinados com o português necessário para se comunicar eficazmente",
    "Empresas que contratam imigrantes e refugiados podem se beneficiar de incentivos fiscais e apoio governamental"
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
    closeModal();
  };

  return (
    <div className="secao-empresas">
      <div className="secao-texto">
        <h1>Por que contratar nossos profissionais?</h1>
        <p>
          A Abraços conta com um banco de currículos de profissionais de todas as idades
          e áreas de atuação.
        </p>
        <ul className={`lista-checklist ${animate ? "animacao" : ""}`}>
          {checklistItems.map((item, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.3}s` }}>
              {item}
            </li>
          ))}
        </ul>
        <button className="botao-cta" onClick={openModal}>
          Contrate já!
        </button>
      </div>
      <div className="chave">
        <img
          src="assets/images/empresas.svg"
          alt="Trabalhadoras"
          className="imagem-principal"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="sobreposicao-modal">
          <div className="modall" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <div className="grupo-formulario">
                <label htmlFor="razao-social">Razão Social</label>
                <input type="text" id="razao-social" name="razaoSocial" required />
              </div>
              <div className="grupo-formulario">
                <label htmlFor="nome-fantasia">Nome Fantasia</label>
                <input type="text" id="nome-fantasia" name="nomeFantasia" required />
              </div>
              <div className="grupo-formulario">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="grupo-formulario">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" required />
              </div>
              <div className="grupo-formulario">
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco" required />
              </div>
              <div className="grupo-formulario">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" required></textarea>
              </div>
              <div className="botoes-formulario">
                <button type="submit">Enviar</button>
                <button type="button" onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Empresas;
