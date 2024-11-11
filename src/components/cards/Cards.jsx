import React, { useState } from 'react';
import '../Styles/Cards.css';
import CardCarousel from "./CardCarrousel";
import CardCarousel1 from "./CardCarrousel1";
import CardCarousel2 from "./CardCarrousel2";


function Cards() {
    const [showCover, setShowCover] = useState(true);
    

    const playVideo = () => {
        setShowCover(false);
    };
    return(
        <>
            <div className='foto-cards-home'>
                <h1> O <span style={{color: '#FF6926'}}>conhecimento</span> é a <span style={{color: '#4B92DB'}}>chave</span> que abre portas para um futuro melhor.</h1>
            </div>
            <section className="laranja">
                <h1>Categorias: </h1>
            </section>
            <CardCarousel/>
            <CardCarousel1/>
            <CardCarousel2/>

            <section className="como-utilizar">
                <h1>Como utilizar os Cards?</h1>
            </section>

            <div className="video-container">
                {showCover && (
                    <div className="cover" onClick={playVideo}>
                        <img src="assets/images/img-youtube.svg" alt="Capa do Vídeo" />
                        <div className="play-button">▶</div>
                    </div>
                )}
                <iframe 
                    width="840" 
                    height="470" 
                    src={`https://www.youtube.com/embed/4y3C7tjMJr0?si=XcbhlLR1tzIRK3u-${!showCover ? '&autoplay=1' : ''}`}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
}
export default Cards;
