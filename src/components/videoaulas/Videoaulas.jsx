import '../Styles/Videoaulas.css'
import lupa from '../../../public/assets/images/lupa.png'
import Bolas2 from '../../../public/assets/images/bolas2.svg'

function Videoaulas() {
    return(
        <section className='section_aulas'>
            <section className='section_img'>
                <div className='img_comp'>
                    <h1>Aulas de <span>Português</span></h1>
                </div>
            </section>

            <section className='section_aulas2'>
                <div className='conteudo_aulas'>
                    <div className='busca-container'>
                        <input type="text" name="buscar" className='buscar_servico' placeholder='Busque aqui' title='buscar'/>
                        <img src={lupa} alt="lupa" className='lupa'/>
                    </div>

                    <div className='qual_s'>
                        <p>Qual serviços de Aulas de Português está <br />precisando?</p>
                    </div>

                    <button className="btn-gramatica">Gramática</button>
                    <button className="btn-frases">Frases do dia a dia</button>
                    <button className="btn-verbos">Verbos e adjetivos</button>
                </div>

                <div className='sobre_aulas'>
                    <h2>Sobre</h2>
                    <p>As aulas de português são fundamentais para promover a integração social e cultural no Brasil. Além de ensinarem o idioma, essas aulas ajudam a desenvolver habilidades de comunicação essenciais para o dia a dia.</p>
                </div>
            </section>

                        {/* Adicionando o iframe do vídeo acima do texto "Vídeo Aulas" */}
                        <section className="video-container">
                        <iframe 
                            width="840" 
                            height="470" 
                            src={`https://www.youtube.com/embed/pD0tkm7ZHbg`}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            style={{ marginTop: '30px' }}
                        ></iframe>
            </section>

            <section className="section_bolas">
                <div className="bolas_content">
                    <img src={Bolas2} alt="Bolas" className="bolas_image" />
                    <p className="video_aulas_text">Vídeo Aulas</p>
                </div>
            </section>

            <section className="videos_section">
                <div className="video_list">
                    <div className="video_item">
                        <img src="assets/images/thumb.svg" alt="Aula 1" className="video_thumbnail" />
                        <p className="video_hashtag">#aula 1</p>
                    </div>
                    <div className="video_item">
                        <img src="assets/images/thumb.svg" alt="Aula 2" className="video_thumbnail" />
                        <p className="video_hashtag">#aula 2</p>
                    </div>
                    <div className="video_item">
                        <img src="assets/images/thumb.svg" alt="Aula 3" className="video_thumbnail" />
                        <p className="video_hashtag">#aula 3</p>
                    </div>
                    <div className="video_item">
                        <img src="assets/images/thumb.svg" alt="Aula 4" className="video_thumbnail" />
                        <p className="video_hashtag">#aula 4</p>
                    </div>
                    <div className="video_item">
                        <img src="assets/images/thumb.svg" alt="Aula 5" className="video_thumbnail" />
                        <p className="video_hashtag">#aula 5</p>
                    </div>
                </div>
                <button className="load_more_button">Carregar mais vídeos</button>
            </section>
        </section>
    )
}

export default Videoaulas