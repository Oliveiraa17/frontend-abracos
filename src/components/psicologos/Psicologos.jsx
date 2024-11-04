import '../Styles/Psicologos.css';
import Beneficios from './Beneficios';
import Trabalhadores from './trabalhadores';
import Modal from './Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Psicologos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPsicologo, setSelectedPsicologo] = useState(null);

    const psicologos = [
        {
            foto: 'assets/images/drca.svg',
            titulo: 'Dra. Camilla Loures',
            paragrafo: 'Psicologia do Trauma e Resiliência Emocional',
        },
        {
            foto: 'assets/images/DrRichard.svg',
            titulo: 'Dr. Richard Gomes',
            paragrafo: 'Psicologia da Inclusão e apoio ',
        },
        {
            foto: 'assets/images/DrRaquel.svg',
            titulo: 'Dra. Raquel Sanches',
            paragrafo: 'Psicologia do Estresse e Bem-Estar Mental',
        }
    ];

    const openModal = (psicologo) => {
        setSelectedPsicologo(psicologo);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedPsicologo(null);
    };

    return (
        <>
            <section>
                <div className="fundo_psicologos">
                    <p>Abraçando sonhos, construindo futuros. Cada<br /> <span className='passo'>passo</span> é um caminho para um novo <span className='recomeço'>recomeço.</span></p>
                </div>
            </section>

            <section className='we'>
                <h1>Nossos melhores Profissionais:</h1>
            </section>

            <section className='bordaa'>
                {psicologos.map((psicologo, index) => (
                    <div key={index} onClick={() => openModal(psicologo)}>
                        <Trabalhadores foto={psicologo.foto} titulo={psicologo.titulo} paragrafo={psicologo.paragrafo} />
                    </div>
                ))}
            </section>

            <section className='Laranja'>
                <div className='textinho'>
                    <h1>Benefícios</h1>
                    <p>Acompanhe os privilégios de nossos serviços</p>
                </div>
                <div className='imagens'>
                    <Beneficios foto='assets/images/Consultas.svg' texto='Consultas sem custo' />
                    <Beneficios foto='assets/images/atendimento.svg' texto='Atendimentos online' />
                    <Beneficios foto='assets/images/Tratamento.svg' texto='Tratamento acompanhado' />
                </div>
            </section>

            <section className='Formulario'>
                <div className='juncao'>
                    <img src="assets/images/Apertodemao.svg" alt="Aperto de mão" />
                    <div className='envolta'>
                        <div className='ladoaperto'>
                            <h1>Seja a Mudança!</h1>
                            <p>Torne-se um Psicólogo
                            Voluntário!</p>
                        </div>
                        <div className='preparadolaranja'>
                            <p className='preparado'>Preparado para começar?</p>
                            <Link to="/form" className='preparadoazul'>Preparado</Link>
                        </div>
                    </div>
                </div>
            </section>

            {modalOpen && selectedPsicologo && (
                <Modal onClose={closeModal} psicologo={selectedPsicologo} />
            )}
        </>
    );
}

export default Psicologos;
