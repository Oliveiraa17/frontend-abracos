import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const CardCarousel = () => {
    const navigate = useNavigate();

    const cards = [
        { image: 'assets/images/amizade.gif', label: 'Saudações', route: '/Saudações' },
        { image: 'assets/images/fazer-compras.gif', label: 'Mercado', route: '/mercado' },
        { image: 'assets/images/onibus-escolar.gif', label: 'Transporte', route: '/Transporte' },
        { image: 'assets/images/remedio.gif', label: 'Hospital', route: '/hospital' },
        { image: null, label: 'Banco', route: '/Banco' },
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
            breakpoints={{
                500: {
                    slidesPerView: 2, // Ajusta para 2 slides por vez em telas de até 500px
                },
            }}
        >
            {cards.map((card, index) => (
                <SwiperSlide
                    key={index}
                    onClick={() => onCardClick(card.route, card.label)}
                    style={{ cursor: 'pointer' }}
                >
                    <Card image={card.image} label={card.label} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
