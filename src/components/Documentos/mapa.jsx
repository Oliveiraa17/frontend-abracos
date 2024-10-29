import '../Styles/Documentos.css';

function Mapa() {
    return (
      <section className="mapa-section">
        <div className="mapa-wrapper">
          <div className="mapa-frame-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.5306956883599!2d-46.69240527146453!3d-23.52808589867089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1729706117154!5m2!1spt-BR!2sbr"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização"
            ></iframe>
          </div>
        </div>
      </section>
    );
}

export default Mapa;
