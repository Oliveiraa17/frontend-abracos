import React from 'react';
import '../../Styles/CardCarrousel.css';
import Cards2 from './Cards2';
import { useLocation } from 'react-router-dom';

function Pagina1() {
    const location = useLocation();
    const [categoriaSelecionada, setCategoriaSelecionada] = React.useState(location.state?.categoriaSelecionada || 'Hospital');
    const [vozSelecionada, setVozSelecionada] = React.useState('feminina');

    const playAudio = (baseFileName) => {
        const audioPath = getAudioPath(baseFileName);
        const audio = new Audio(audioPath);
        audio.play();
    };

    const mudarCondicao = (e) => {
        setCategoriaSelecionada(e.target.getAttribute('name'));
    }

    const categoriaToFolderMap = {
        "Saudações": "saudacoes",
        "Hospital": "hospital",
        "Mercado": "mercado",
        "Transporte": "transporte",
        "Alimentação": "alimentacao",
        "Banco": "banco",
        "Polícia": "policia",
        "Compras": "compras",
        "Escola": "escola",
        "Documentos": "documentos",
    };
    const getAudioPath = (baseFileName) => {
        const folderName = categoriaToFolderMap[categoriaSelecionada] || "default";
        return `assets/audio/${folderName}/${baseFileName}_${vozSelecionada}.mp3`;
    };

    return (
        <>
            <div className="img-fundo">
                <h1 className='fra_efeito'>
                    <span className='conectarr'>
                        <mark>Conecte-se </mark>
                    </span>de forma rápida e <br /> simples em qualquer <span className='idiomaa'><mark className='azull'>idioma.</mark></span>
                </h1>
            </div>

            <div className="seletor-voz">
                <label className="voz-label">
                    <input
                        type="radio"
                        name="voz"
                        value="feminina"
                        checked={vozSelecionada === 'feminina'}
                        onChange={(e) => setVozSelecionada(e.target.value)}
                        className="voz-radio"
                    />
                    <span className="voz-texto">Feminina</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="voz"
                        value="masculina"
                        checked={vozSelecionada === 'masculina'}
                        onChange={(e) => setVozSelecionada(e.target.value)}
                    />
                    Masculina
                </label>
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
                        <h1>Saudações:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Ola')}>
                            <Cards2 icon='assets/images/ola.png' text='Olá' />
                        </div>
                        <div onClick={() => playAudio('Bomdia')}>
                            <Cards2 icon='assets/images/ensolarado.png' text='Bom dia' />
                        </div>
                        <div onClick={() => playAudio('Boatarde')}>
                            <Cards2 icon='assets/images/nascer-do-sol.png' text='Boa tarde' />
                        </div>
                        <div onClick={() => playAudio('Boanoite')}>
                            <Cards2 icon='assets/images/lua-crescente.png' text='Boa noite' />
                        </div>
                    </section>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Entendido')}>
                            <Cards2 icon='assets/images/entender.png' text='Entendido' />
                        </div>
                        <div onClick={() => playAudio('Desculpa')}>
                            <Cards2 icon='assets/images/desculpa.png' text='Desculpa' />
                        </div>
                        <div onClick={() => playAudio('Porfavor')}>
                            <Cards2 icon='assets/images/por-favor.png' text='Por Favor' />
                        </div>
                        <div onClick={() => playAudio('Obrigado')}>
                            <Cards2 icon='assets/images/feliz.png' text='Obrigado' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Naosei')}>
                            <Cards2 icon='assets/images/confuso.png' text='Não sei' />
                        </div>
                        <div onClick={() => playAudio('Denada')}>
                            <Cards2 icon='assets/images/obrigado.png' text='De nada' />
                        </div>
                        <div onClick={() => playAudio('Naoentendi')}>
                            <Cards2 icon='assets/images/estranho.png' text='Não entendi' />
                        </div>
                        <div onClick={() => playAudio('Comlicenca')}>
                            <Cards2 icon='assets/images/pessoa.png' text='Com licença' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Concordo')}>
                            <Cards2 icon='assets/images/concordar.png' text='Concordo' />
                        </div>
                        <div onClick={() => playAudio('Discordo')}>
                            <Cards2 icon='assets/images/discordo.png' text='Discordo' />
                        </div>
                        <div onClick={() => playAudio('Espere')}>
                            <Cards2 icon='assets/images/esperando.png' text='Espere' />
                        </div>
                        <div onClick={() => playAudio('Boasorte')}>
                            <Cards2 icon='assets/images/sorte.png' text='Boa sorte' />
                        </div>
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Hospital' && (
                <>
                    <div className='titulo-card'>
                        <h1>Hospital:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('assets/audio/hospi.mp3')}>
                            <Cards2 icon='assets/images/localCards.png' text='Onde fica o hospital mais próximo daqui?' />
                        </div>
                        <Cards2 icon='assets/images/ambulanciaCards.png' text='Preciso de ajuda médica, pode me levar ao hospital?' />
                        <Cards2 icon='assets/images/comunicacaoCards.png' text='Como faço para marcar uma consulta com um médico?' />
                        <Cards2 icon='assets/images/injecao.png' text='Podem indicar um hospital especializado?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('assets/audio/')}>
                            <Cards2 icon='assets/images/health-checkup.png' text='Quais exames preciso fazer para um check-up completo?' />
                        </div>
                        <Cards2 icon='assets/images/tratamento.png' text='Pode me explicar como funciona esse tratamento?' />
                        <Cards2 icon='assets/images/procedimento.png' text='Qual é o procedimento para solicitar um laudo médico?' />
                        <Cards2 icon='assets/images/dificuldade-ao-respirar.png' text='É normal sentir esses sintomas? O que devo fazer?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('assets/audio/')}>
                            <Cards2 icon='assets/images/esperando.png' text='Qual é o tempo médio de recuperação para essa condição?' />
                        </div>
                        <Cards2 icon='assets/images/pele.png' text='Existe algum cuidado especial que devo tomar após a alta?' />
                        <Cards2 icon='assets/images/fisioterapia.png' text='Pode me orientar sobre os passos para iniciar uma fisioterapia?' />
                        <Cards2 icon='assets/images/cuidados-com-a-pele.png' text='Que cuidados devo adotar no dia a dia?' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Mercado' && (
                <>
                    <div className='titulo-card'>
                        <h1>Mercado:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/carrinhoCards.png' text='Onde posso encontrar um mercado?' />
                        <Cards2 icon='assets/images/frutasCards.png' text='Quais são os melhores mercados para comprar alimentos frescos?' />
                        <Cards2 icon='assets/images/cartaoCards.png' text='Este mercado aceita cartões internacionais?' />
                        <Cards2 icon='assets/images/taco.png' text='Como encontrar um mercado com produtos típicos da minha cultura?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/acougueiro.png' text='Onde posso encontrar um açougue por aqui?' />
                        <Cards2 icon='assets/images/carne.png' text='Qual mercado tem a melhor seção de congelados?' />
                        <Cards2 icon='assets/images/entrega-rapida.png' text='Esse mercado oferece delivery?' />
                        <Cards2 icon='assets/images/vegan.png' text='Como posso saber se o mercado tem produtos veganos?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/picking.png' text='Onde posso comprar frutas e verduras recém-colhidas?' />
                        <Cards2 icon='assets/images/produtos-artesanais.png' text='Esse mercado tem uma área de produtos artesanais?' />
                        <Cards2 icon='assets/images/preco-baixo.png' text='Como posso encontrar mercados com preços mais acessíveis?' />
                        <Cards2 icon='assets/images/tempero.png' text='Qual mercado tem maior variedade de temperos e especiarias?' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Transporte' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/localizacaoCards.png' text='Qual o caminho mais rápido ao centro com transporte público?' />
                        <Cards2 icon='assets/images/bilheteCards.png' text='Como faço para comprar um bilhete de metrô?' />
                        <Cards2 icon='assets/images/relogioCards.png' text='Quanto tempo o ônibus demora para passar aqui?' />
                        <Cards2 icon='assets/images/cifrao.png' text='Qual o valor do transporte público?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/metro.png' text='Qual linha de metrô vai direto para o centro?' />
                        <Cards2 icon='assets/images/ponto-de-onibus.png' text='Onde posso pegar o ônibus mais próximo?' />
                        <Cards2 icon='assets/images/passagem-de-nivel.png' text='Esse trem faz paradas em todos os bairros principais?' />
                        <Cards2 icon='assets/images/checar.png' text='Como posso verificar os horários dos transportes públicos?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/aplicativo-movel.png' text='Existe algum aplicativo para planejar trajetos de ônibus?' />
                        <Cards2 icon='assets/images/sinal-de-transito.png' text='Qual a melhor forma de evitar trânsito no transporte público?' />
                        <Cards2 icon='assets/images/estacao-ferroviaria.png' text='Há alguma estação de metrô acessível por aqui?' />
                        <Cards2 icon='assets/images/bilhete-de-trem.png' text='Como recarregar o cartão de transporte na minha cidade?' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Alimentação' && (
                <>
                    <div className='titulo-card'>
                        <h1>Alimentação:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/restauranteCards.png' text='Você pode me indicar um restaurante que sirva comida halal?' />
                        <Cards2 icon='assets/images/mundoCards.png' text='Onde posso encontrar comida típica do meu país?' />
                        <Cards2 icon='assets/images/legumesCards.png' text='Existe algum lugar aqui que tenha opções vegetarianas?' />
                        <Cards2 icon='assets/images/barraca-de-comida.png' text='Como posso encontrar alimentos frescos nas proximidades? ' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/prato.png' text='Qual restaurante serve pratos tradicionais daqui?' />
                        <Cards2 icon='assets/images/vegetariano.png' text='Onde posso comer algo rápido e saudável por aqui?' />
                        <Cards2 icon='assets/images/comida-organica.png' text='Há algum lugar especializado em comida vegana?' />
                        <Cards2 icon='assets/images/livre-de-laticinios.png' text='Conhece um café que tenha opções sem lactose? ' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/sem-gluten.png' text='Existe algum restaurante com menu sem glúten nesta área?' />
                        <Cards2 icon='assets/images/cozinhando.png' text='Onde encontro um bom lugar para experimentar culinária internacional?' />
                        <Cards2 icon='assets/images/mercearia.png' text='Tem algum mercado com ingredientes típicos para cozinhar em casa?' />
                        <Cards2 icon='assets/images/organico.png' text='Pode me recomendar um restaurante com opções orgânicas? ' />
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Banco' && (
                <>
                    <div className='titulo-card'>
                        <h1>Banco:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/contabancariaCards.png' text='Como posso abrir uma conta bancária como imigrante?' />
                        <Cards2 icon='assets/images/banco-suporte.svg' text='Nesse banco tem algum suporte?' />
                        <Cards2 icon='assets/images/caixaeletrCards.png' text='Este caixa eletrônico aceita cartões de fora do Brasil?' />
                        <Cards2 icon='assets/images/cartao-de-identidade.png' text='Quais documentos são necessários para usar os serviços bancários aqui?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/estrangeiro.png' text='Qual banco é mais recomendado para estrangeiros?' />
                        <Cards2 icon='assets/images/passapor.png' text='Posso usar meu passaporte para abrir uma conta?' />
                        <Cards2 icon='assets/images/acesso-a-operacoes-bancarias-via-internet.png' text='Existe algum banco que tenha suporte em inglês ou espanhol?' />
                        <Cards2 icon='assets/images/dinheiro.png' text='Há algum limite de saque para estrangeiros neste caixa eletrônico?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/troca-de-dinheiro.png' text='Como faço para transferir dinheiro para outro país?' />
                        <Cards2 icon='assets/images/fatura.png' text='Posso abrir uma conta online ou preciso ir até uma agência?' />
                        <Cards2 icon='assets/images/agente.png' text='Este banco oferece contas específicas para residentes temporários?' />
                        <Cards2 icon='assets/images/troca-de-dinhe.png' text='Onde encontro um banco que troque moeda estrangeira?' />
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Polícia' && (
                <>
                    <div className='titulo-card'>
                        <h1>Polícia:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/sireneCards.png' text='Onde é a delegacia de polícia mais próxima?' />
                        <Cards2 icon='assets/images/ocorrenciaCards.png' text='Como faço para registrar uma ocorrência?' />
                        <Cards2 icon='assets/images/telefoneCards.png' text='Preciso de ajuda, você pode chamar a polícia?' />
                        <Cards2 icon='assets/images/apoio-suporte.png' text='Existe um canal de apoio da polícia para imigrantes na minha situação?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/alarme.png' text='Qual o número de emergência para chamar a polícia aqui?' />
                        <Cards2 icon='assets/images/informacoes.png' text='Como posso obter informações sobre uma ocorrência registrada?' />
                        <Cards2 icon='assets/images/estupro.png' text='Onde fica a delegacia de polícia especializada em casos de violência doméstica?' />
                        <Cards2 icon='assets/images/vitima.png' text='A polícia oferece algum tipo de assistência a vítimas de crimes?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/boletim-de-noticias.png' text='Como posso solicitar uma cópia do boletim de ocorrência?' />
                        <Cards2 icon='assets/images/escolha-de-idioma.png' text='A delegacia tem atendimento em outros idiomas para estrangeiros?' />
                        <Cards2 icon='assets/images/atendimento-ao-cliente.png' text='Quais são os horários de atendimento da delegacia mais próxima?' />
                        <Cards2 icon='assets/images/servico-de-atendimento-ao-consumidor.png' text='Existe algum centro de apoio legal para imigrantes que precisem de ajuda policial?' />
                    </section>
                </>

            )}
            {categoriaSelecionada === 'Compras' && (
                <>
                    <div className='titulo-card'>
                        <h1>Compras:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/camisetaCards.png' text='Onde posso encontrar uma loja de roupas com preços acessíveis?' />
                        <Cards2 icon='assets/images/moveisCards.png' text='Qual o melhor lugar para comprar móveis usados?' />
                        <Cards2 icon='assets/images/moedasCards.png' text='Este shopping aceita moedas internacionais?' />
                        <Cards2 icon='assets/images/localizacao.png' text='Quais são os melhores shoppings ou lojas de rua nesta região?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/carrinho-de-carrinho.png' text='Existe algum mercado de pulgas por aqui?' />
                        <Cards2 icon='assets/images/roupass.png' text='Onde encontro lojas especializadas em roupas de segunda mão?' />
                        <Cards2 icon='assets/images/entrega-rapidaaa.png' text='Tem alguma loja de móveis que faça entrega rápida?' />
                        <Cards2 icon='assets/images/promocoes.png' text='Quais lojas oferecem promoções nesta época do ano?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/eletronico.png' text='Onde posso encontrar eletrônicos com bons preços?' />
                        <Cards2 icon='assets/images/mercadooo.png' text='Este shopping tem área de desconto ou outlet?' />
                        <Cards2 icon='assets/images/artesanal.png' text='Qual loja daqui vende produtos artesanais ou locais?' />
                        <Cards2 icon='assets/images/pagamento-movel.png' text='Como posso encontrar lojas que aceitem pagamentos digitais?' />
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Escola' && (
                <>
                    <div className='titulo-card'>
                        <h1>Escola:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/escolaCards.png' text='Quais escolas públicas aceitam matrículas de crianças imigrantes?' />
                        <Cards2 icon='assets/images/cursoportuguesCards.png' text='Existe algum curso de português oferecido por essa escola?' />
                        <Cards2 icon='assets/images/matriculaCards.png' text='Como faço para matricular meu filho nesta escola?' />
                        <Cards2 icon='assets/images/aprendizagem-por-reforco.png' text='Como posso inscrever meus filhos em aulas de reforço escolar?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/miudo.png' text='Há vagas disponíveis para crianças estrangeiras nesta escola?' />
                        <Cards2 icon='assets/images/carteira-de-identidade.png' text='Quais documentos preciso apresentar para a matrícula?' />
                        <Cards2 icon='assets/images/lingua-estrangeira.png' text='Essa escola oferece apoio pedagógico para crianças que não falam português?' />
                        <Cards2 icon='assets/images/extracurricular.png' text='Existem atividades extracurriculares abertas a todos os alunos?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/transferindo.png' text='Qual o processo para transferir uma criança de outra escola?' />
                        <Cards2 icon='assets/images/diversidade-cultural.png' text='Essa escola tem programas de integração cultural para alunos imigrantes?' />
                        <Cards2 icon='assets/images/bilingue.png' text='Há opções de ensino bilíngue ou de idiomas nesta região?' />
                        <Cards2 icon='assets/images/inclusividade.png' text='Onde encontro informações sobre escolas inclusivas para crianças estrangeiras?' />
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Documentos' && (
                <>
                    <div className='titulo-card'>
                        <h1>Documentos:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/cpfCards.png' text='Onde posso tirar meu CPF?' />
                        <Cards2 icon='assets/images/residenciaCards.png' text='Qual o procedimento para solicitar a residência permanente?' />
                        <Cards2 icon='assets/images/marteloCards.png' text='Como posso legalizar meus documentos estrangeiros aqui?' />
                        <Cards2 icon='assets/images/prazo-final.png' text='Quais são os prazos para solicitar visto de trabalho ou residência?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/homem-de-negocios.png' text='Onde posso solicitar a carteira de trabalho para estrangeiros?' />
                        <Cards2 icon='assets/images/visto.png' text='Como faço para renovar meu visto temporário?' />
                        <Cards2 icon='assets/images/pergunta.png' text='Quais órgãos oferecem suporte para regularização de documentos?' />
                        <Cards2 icon='assets/images/RG.png' text='Há um atendimento específico para emissão de RG para estrangeiros?' />
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <Cards2 icon='assets/images/paises.png' text='Qual o prazo para registrar minha entrada no país?' />
                        <Cards2 icon='assets/images/diplo.png' text='Onde encontro informações sobre revalidação de diplomas?' />
                        <Cards2 icon='assets/images/agendamento-on-line.png' text='Posso agendar online para legalizar meus papéis no consulado?' />
                        <Cards2 icon='assets/images/naturalizacao.png' text='Existe algum programa que facilite a naturalização de estrangeiros?' />
                    </section>
                </>
            )}
        </>
    );
}

export default Pagina1;
