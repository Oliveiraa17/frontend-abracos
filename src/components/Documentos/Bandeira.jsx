import '../Styles/Documentos.css';

function Bandeira({ foto, texto }) {
  return (
    <section className="Laranja">
      <div className="tudo">
        <div className="imagens">
          <img src={foto} alt="Imagem da bandeira" />
        </div>
        <div className="especificacoes">
          <p>{texto}</p>
        </div>
      </div>
    </section>
  );
}

export default Bandeira;