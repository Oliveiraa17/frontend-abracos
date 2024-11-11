import React, { useState } from 'react';
import '../Styles/Documentos.css';

function Processo() {
  const [activeIndex, setActiveIndex] = useState(null);

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
      details: "Conhecida como o “RG do imigrante”, a Carteira de Registro Nacional Migratório (CRNM) é o documento essencial para estrangeiros que buscam regularizar sua situação no Brasil.Instituída com a nova Lei de Imigração, em vigor desde maio de 2017, a CRNM substituiu a antiga Carteira de Identidade de Estrangeiro (CIE), que até então era utilizada para esse propósito.Essa mudança também trouxe uma nova designação para o número de identificação dos cidadãos estrangeiros: o antigo Registro Nacional de Estrangeiro (RNE) passou a ser chamado de Registro Nacional Migratório (RNM)."
    }
  ];
  return (
    <section className='regu-h1'>
      <h1>Processo de regularização de imigração:</h1>
      <div className="baixo-forms" style={{ width: '75%', marginLeft: '150px' }}>

        <ol>
          {items.map((item, index) => (
            <li key={index} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleItem(index)}
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}
              >
                {item.title}
                <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
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
