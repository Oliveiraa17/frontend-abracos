import '../Styles/Documentos.css';

function Passaporte({ foto, titulo, texto }) {
  return (
    <section className="fundo_Passaporte">
      <div className="tudo3">
        <div className="imagens">
          <img src={foto} alt="Imagem do passaporte brasileiro" />
        </div>
        <h2 className="titulo">{titulo}</h2>
        <div className="especificacoes">
          <p>{texto}</p>
        </div>
      </div>
    </section>
  );
}

export default Passaporte;