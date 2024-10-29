import React from 'react';
import '../../Styles/CardCarrousel.css';
import Cards2 from './Cards2';
import { useLocation } from 'react-router-dom';

function Pagina1() {
    const location = useLocation();
    const [categoriaSelecionada, setCategoriaSelecionada] = React.useState(location.state?.categoriaSelecionada || 'Hospital');

    // const speakText = (text) => {
    //     const utterance = new SpeechSynthesisUtterance(text);
    //     speechSynthesis.speak(utterance);
    // };

    const playAudio = (audioFile) => {
        const audio = new Audio(audioFile);
        audio.play();
    };

    function mudarCondicao(e) {
        setCategoriaSelecionada(e.target.getAttribute('name'));
    }

    return (
        <>
            <div className="img-fundo">
                <h1 className='fra_efeito'> <span className='conectarr'>Conecte-se</span> de forma rápida e <br /> simples em qualquer <span className='idiomaa'>idioma.</span></h1>
            </div>
            <div className='button'>
                <button onClick={mudarCondicao} name='Saudações' className={categoriaSelecionada === 'Saudações' ? 'selecionado' : ''}>Saudações</button>
                <button onClick={mudarCondicao} name='Hospital' className={categoriaSelecionada === 'Hospital' ? 'selecionado' : ''}>Hospital</button>
                <button onClick={mudarCondicao} name='Mercado' className={categoriaSelecionada === 'Mercado' ? 'selecionado' : ''}>Mercado</button>
                <button onClick={mudarCondicao} name='Transporte' className={categoriaSelecionada === 'Transporte' ? 'selecionado' : ''}>Transporte</button>
                <button onClick={mudarCondicao} name='Alimentação' className={categoriaSelecionada === 'Alimentação' ? 'selecionado' : ''}>Alimentação</button>
                <button onClick={mudarCondicao} name='Banco' className={categoriaSelecionada === 'Banco' ? 'selecionado' : ''}>Banco</button>
                <button onClick={mudarCondicao} name='Polícia' className={categoriaSelecionada === 'Polícia' ? 'selecionado' : ''}>Polícia</button>
                <button onClick={mudarCondicao} name='Compras' className={categoriaSelecionada === 'Compras' ? 'selecionado' : ''}>Compras</button>
                <button onClick={mudarCondicao} name='Escola' className={categoriaSelecionada === 'Escola' ? 'selecionado' : ''}>Escola</button>
                <button onClick={mudarCondicao} name='Documentos' className={categoriaSelecionada === 'Documentos' ? 'selecionado' : ''}>Documentos</button>
            </div>

            {categoriaSelecionada === 'Saudações' && (
                <>
                    <div className='titulo-card'>
                        <h1>Saudações</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('assets/audio/Olá.mp3')}>
                            <Cards2 icon='assets/images/ola.png' text='Olá' />
                        </div>
                        <div onClick={() => playAudio('assets/audio/Bomdia.mp3')}>
                            <Cards2 icon='assets/images/ensolarado.png' text='Bom dia' />
                        </div>
                        <div onClick={() => playAudio('assets/audio/Boatarde.mp3')}>
                            <Cards2 icon='assets/images/nascer-do-sol.png' text='Boa tarde' />
                        </div>
                        <div onClick={() => playAudio('assets/audio/Boanoite.mp3')}>
                            <Cards2 icon='assets/images/lua-crescente.png' text='Boa noite' />
                        </div>
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Hospital' && (
                <>
                    <div className='titulo-card'>
                        <h1>Hospital</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('assets/audio/hospi.mp3')}>
                            <Cards2 icon='assets/images/localCards.png' text='Onde fica o hospital mais próximo daqui?' />
                        </div>
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Preciso de ajuda médica, pode me levar ao hospital?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Como faço para marcar uma consulta com um médico?' />
                        <Cards2 icon='assets/images/injecao.png' text='Podem indicar um hospital especializado?' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Mercado' && (
                <>
                    <div className='titulo-card'>
                        <h1>Mercado</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/carrinhoCards.png' text='Onde posso encontrar um mercado?' />
                        <Cards2 icon='assets/images/frutasCards.png' text='Quais são os melhores mercados para comprar alimentos frescos?' />
                        <Cards2 icon='assets/images/cartaoCards.png' text='Este mercado aceita cartões internacionais?' />
                        <Cards2 icon='assets/images/taco.png' text='Como encontrar um mercado com produtos típicos da minha cultura?' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Transporte' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/localizacaoCards.png' text='Qual o caminho mais rápido ao centro com transporte público?' />
                        <Cards2 icon='assets/images/bilheteCards.png' text='Como faço para comprar um bilhete de metrô?' />
                        <Cards2 icon='assets/images/relogioCards.png' text='Quanto tempo o ônibus demora para passar aqui?' />
                        <Cards2 icon='assets/images/cifrao.png' text='Qual o valor do transporte público?' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Alimentação' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/restauranteCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Banco' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/localizacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Polícia' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/localizacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                    </section>
                </>

            )}
            {categoriaSelecionada === 'Compras' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/localizacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Escola' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/localizacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Documentos' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/localizacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Transporte?' />
                    </section>
                </>
            )}
        </>
    );
}

export default Pagina1;
