import React, { useState, useEffect } from 'react';
import '../Styles/Documentos.css';

function Processo() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "Acordo do Mercosul para livre trânsito e residência.",
      details: "Este acordo permite que cidadãos dos países do Mercosul possam transitar e residir em outros países membros sem necessidade de visto especial."
    },
    {
      title: "Residência permanente por meio de filho/cônjuge brasileiro ou para reunificação familiar.",
      details: "Estrangeiros com parentesco próximo a brasileiros (filhos ou cônjuge) podem solicitar a residência permanente no Brasil."
    },
    {
      title: "Renovação do documento de residência permanente.",
      details: "Este processo permite que estrangeiros residentes renovem seus documentos de residência permanente."
    },
    {
      title: "Declaração de rendimentos (trabalho).",
      details: "Documento necessário para comprovar renda de trabalho do estrangeiro no Brasil."
    },
    {
      title: "Declaração e autorização de viagem.",
      details: "Documento exigido para menores estrangeiros viajando desacompanhados ou com um dos pais."
    },
    {
      title: "Solicitação da segunda via de documentos, CRNM.",
      details: "Conhecida como o “RG do imigrante”, a Carteira de Registro Nacional Migratório (CRNM) é o documento essencial para estrangeiros que buscam regularizar sua situação no Brasil. Instituída com a nova Lei de Imigração, em vigor desde maio de 2017, a CRNM substituiu a antiga Carteira de Identidade de Estrangeiro (CIE), que até então era utilizada para esse propósito. Essa mudança também trouxe uma nova designação para o número de identificação dos cidadãos estrangeiros: o antigo Registro Nacional de Estrangeiro (RNE) passou a ser chamado de Registro Nacional Migratório (RNM)."
    }
  ];

  return (
    <section
      className='regu-h1'
      style={{
        padding: isMobile ? '10px' : '20px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

      }}
    >
      <h1
        style={{
          fontSize: isMobile ? '1rem' : '2rem', 
          color: '#FF6926', 
          fontWeight: '600', 
          textTransform: 'uppercase', 
          marginBottom: '50px', 
          maxWidth: '80%', 
          margin: '50px auto', 
          textAlign: 'center',
      }}
>
        Processo de regularização de imigração:
      </h1>
      <div
        className="baixo-forms"
        style={{
          width: isMobile ? '90%' : '75%',
          marginLeft: isMobile ? '0' : '150px',
          margin: isMobile ? '0 auto' : '',
        }}
      >
        <ol style={{ paddingLeft: isMobile ? '10px' : '40px' }}>
          {items.map((item, index) => (
            <li
              key={index}
              className="accordion-item"
              style={{ marginBottom: isMobile ? '10px' : '15px' }}
            >
              <div
                className="accordion-title"
                onClick={() => toggleItem(index)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: isMobile ? 'center' : 'space-between',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                }}
              >
                {item.title}
                <span
                  className={`arrow ${activeIndex === index ? 'open' : ''}`}
                  style={{
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    marginLeft: isMobile ? '0' : '15px',
                    marginTop: isMobile ? '5px' : '0',
                  }}
                >
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <div
                  className="accordion-content"
                  style={{
                    fontSize: isMobile ? '0.85rem' : '1rem',
                    padding: isMobile ? '5px 10px' : '10px 15px',
                  }}
                >
                  <p>{item.details}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Processo;