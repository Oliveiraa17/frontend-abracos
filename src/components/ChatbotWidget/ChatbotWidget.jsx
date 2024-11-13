import React, { useState, useEffect, useRef } from "react";
import "../Styles/ChatbotWidget.css";
import HugImage from "../../../public/assets/images/Hug.png";

const perguntasERespostas = [
    { pergunta: "Qual seu nome?", resposta: "Eu sou o Hug, um assistente virtual criado para ajudar você em nosso site." },
    { pergunta: "Como funciona o site?", resposta: "Nosso site oferece uma plataforma para imigrantes e refugiados, com vários serviços de apoio." },
    { pergunta: "Onde posso encontrar ajuda psicológica?", resposta: "Temos uma seção dedicada ao apoio psicológico com recursos e orientações." },
    { pergunta: "Como posso aprender português?", resposta: "Oferecemos cursos gratuitos de português para iniciantes em nosso site." },
    { pergunta: "O que é necessário para tirar minha documentação?", resposta: "Você pode acessar um guia passo a passo sobre documentação em nosso site." },
    { pergunta: "Quais são os recursos disponíveis para refugiados?", resposta: "Disponibilizamos informações sobre abrigos, apoio legal e grupos de apoio." },
    { pergunta: "Como posso encontrar um emprego?", resposta: "Temos uma seção de empregabilidade exclusiva com vagas para imigrantes e refugiados." },
    { pergunta: "Onde posso encontrar locais de abrigo?", resposta: "Disponibilizamos uma lista de abrigos em diversas regiões com informações detalhadas." },
    { pergunta: "Como posso receber ajuda financeira?", resposta: "Ajudamos a conectar você com recursos financeiros e programas de assistência." },
    { pergunta: "Como funciona o suporte jurídico?", resposta: "Parcerias com organizações de direitos humanos oferecem suporte jurídico acessível." },
];

const ChatbotWidget = () => {
    const [aberto, setAberto] = useState(false);
    const [conversa, setConversa] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const logRef = useRef(null);

    const responderPergunta = (perguntaIndex) => {
        const { pergunta, resposta } = perguntasERespostas[perguntaIndex];
        setConversa((prev) => [...prev, { remetente: "Você", texto: pergunta }, { remetente: "Hug", texto: "Pensando..." }]);
        setCarregando(true);

        setTimeout(() => {
            setConversa((prev) => [...prev.slice(0, -1), { remetente: "Hug", texto: resposta }]);
            setCarregando(false);
        }, 1000);

        setPerguntaAtual(perguntaAtual + 1);
    };

    const resetarConversa = () => {
        setConversa([{ remetente: "Hug", texto: "Olá! Como posso ajudá-lo hoje? Clique nas perguntas abaixo para começar." }]);
        setPerguntaAtual(0);
    };

    useEffect(() => {
        if (aberto) resetarConversa();
    }, [aberto]);

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [conversa]);

    return (
        <div className={`chatbot-widget ${aberto ? "chatbot-widget--aberto" : ""}`}>
            {aberto && (
                <div className="chatbot-widget__container">
                    <div className="chatbot-widget__header">
                        <span>Assistente Virtual</span>
                        <button onClick={resetarConversa}>Resetar</button>
                        <button onClick={() => setAberto(false)}>Fechar</button>
                    </div>

                    <div className="chatbot-widget__log" ref={logRef}>
                        {conversa.map((msg, index) => (
                            <div key={index} className={msg.remetente === "Hug" ? "chatbot-widget__bot-response" : ""}>
                                <strong>{msg.remetente}:</strong> {msg.texto}
                            </div>
                        ))}
                        {carregando && <div className="chatbot-widget__loading-dots"><span>.</span><span>.</span><span>.</span></div>}
                    </div>

                    {perguntaAtual < perguntasERespostas.length && (
                        <div className="chatbot-widget__perguntas">
                            {perguntasERespostas.slice(perguntaAtual, perguntaAtual + 3).map((item, index) => (
                                <button key={index} onClick={() => responderPergunta(perguntaAtual + index)} className="chatbot-widget__pergunta-btn">
                                    {item.pergunta}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <button className="chatbot-widget__button" onClick={() => setAberto(!aberto)}>
                <img src={HugImage} alt="Hug" className="chatbot-widget__image" />
            </button>
        </div>
    );
};

export default ChatbotWidget;
