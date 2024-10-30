import Testemunhas from "./Testemunhas"
import Counter from "./Counter"
import AreaRefugio from "./AreaRefugio"
import Slide from "./Slide"
import '../../App.css'

function Home() {
    const firstSliderData = [
        { id: '1', image: 'assets/images/fundo-home.svg' },
        
    ];
    return(
        <>
        <div className="div-imgfundo">

            <div>
                <h1>Acolhendo <span style={{color: '#FF6926'}}>imigrantes</span> e <span style={{color: '#FF6926'}}>refugiados</span> com abraços de habilidades e <span style={{color: '#4B92DB'}}>esperança.</span>
                </h1>
                <p>Um novo começo, uma nova esperança.</p>
            </div>

        </div>
        
        {/* <Slide slideData={firstSliderData}></Slide> */}
        
            <section className='sec-principal'>
            <h1 className="titulo-home-page">Explore nossas categorias: </h1>
            
                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src="assets/gifs/documento.gif" alt="Gif do documento" />
                        <h2>Regularização</h2>
                    </div>
                    <p>Suporte para regularização de documentos com segurança e tranquilidade.</p>
                </div>
                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src="assets/gifs/cards.gif" alt="" />
                        <h2>Cards</h2>
                    </div>
                    <p>Tradução rápida da sua língua nativa para o português brasileiro com os cards.</p>
                </div>
                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src="assets/gifs/books.gif" alt="" />
                        <h2>Estudos</h2>
                    </div>
                    <p>Cursos para melhorar sua comunicação em português e facilitar sua integração.</p>
                </div>
                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src="assets/gifs/saude-mental.gif" alt="" />
                        <h2>Saúde mental</h2>
                    </div>
                    <p>Oferecemos apoio para sua saúde mental, promovendo bem-estar e equilíbrio.</p>
                </div>
            </section>
            <Testemunhas></Testemunhas>
            <main>
                <Counter endValue={67} text="Nacionalidades atendidas" />
                <Counter endValue={100} text="Atendimentos em 2024" />
                <Counter endValue={1200} text="Alunos de português" />
            </main>
            <AreaRefugio></AreaRefugio>
            
        </>
    )
}
export default Home