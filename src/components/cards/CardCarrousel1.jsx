import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const CardCarousel = () => {

    const navigate = useNavigate();
    const cards = [
        { image: 'assets/images/maca.gif', label: 'Alimentação', route: '/Alimentação' },
        { image: 'assets/images/banco.gif', label: 'Banco', route: '/Banco'},
        { image: 'assets/images/policia.gif', label: 'Polícia', route: '/Polícia' },
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
