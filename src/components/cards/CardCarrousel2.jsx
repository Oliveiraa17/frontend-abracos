import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const CardCarousel = () => {

    const navigate = useNavigate();

    const cards = [
        { image: 'assets/images/compras.gif', label: 'Compras', route: '/Compras' },
        { image: 'assets/images/escola.gif', label: 'Escola', route: '/Escola' },
        { image: 'assets/images/documento.gif', label: 'Documentos', route: '/Documentos' },
        { image: null, label: 'Alimentacao' }, 
    ];

    const onCardClick = (route, label) => {
        navigate(route, { state: { categoriaSelecionada: label } });
    };

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation
            loop={true}
            style={{ width: '80%', margin: '0 auto' }}
        >
            {cards.map((card, index) => (
                <SwiperSlide 
                key={index}
                onClick={() => onCardClick(card.route, card.label)}
                style={{cursor: 'pointer'}}
                >
                    <Card image={card.image} label={card.label} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
