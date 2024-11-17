import React, { useState } from 'react';
import '../Styles/Acolhimento.css';

import venezuela from '../../../public/assets/images/venezu.svg';
import siria from '../../../public/assets/images/siria.svg';
import haiti from '../../../public/assets/images/haiti.svg';

import abrace from '../../../public/assets/images/abrace.svg';
import acolhida from '../../../public/assets/images/acolhida.svg';
import fraternidade from '../../../public/assets/images/fraternidade.svg';

function Acolhimento() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        { name: "Venezuela", flag: venezuela },
        { name: "Síria", flag: siria },
        { name: "Haiti", flag: haiti }
    ];

    const shelters = {
        Venezuela: [
            {
                img: acolhida,
                description: "Iniciativa do governo federal com apoio da ONU, que oferece acolhimento temporário em abrigos em Boa Vista e Pacaraima, além de programas de interiorização para outras regiões do Brasil."
            },
            {
                img: abrace,
                description: "Oferece suporte específico para refugiados venezuelanos em regiões com alta demanda de acolhimento."
            },
            {
                img: fraternidade,
                description: "Atua em abrigos em Roraima, oferecendo moradia temporária e apoio humanitário aos refugiados venezuelanos."
            }
        ],
        Síria: [
            {
                img: acolhida,
                description: "Abrigos emergenciais para refugiados sírios em São Paulo, oferecendo suporte psicológico e jurídico."
            }
        ],
        Haiti: [
            {
                img: fraternidade,
                description: "Moradia temporária para haitianos na região sudeste, com suporte para integração ao mercado de trabalho."
            }
        ]
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + countries.length) % countries.length);
    };

    const getVisibleCountries = () => {
        const start = currentIndex;
        const end = (currentIndex + 3) % countries.length;
        if (end > start) {
            return countries.slice(start, end);
        } else {
            return [...countries.slice(start), ...countries.slice(0, end)];
        }
    };

    return (
        <section className='sect_acolher'>
            <section className='acolher'>
                <h1>Acolher é um ato de <span>amor!</span></h1>
            </section>

            <section className='sect_acolher2'>
                <div className='naci'>
                    <h1>Escolha sua Nacionalidade:</h1>
                </div>

                <div className='carousel'>
                    <button className='nav-button' onClick={handlePrev}>◀</button>
                    <div className='carousel-container'>
                        {getVisibleCountries().map((country, index) => (
                            <div
                                className='carousel-item'
                                key={index}
                                onClick={() => setSelectedCountry(country.name)}
                            >
                                <img src={country.flag} alt={`Bandeira ${country.name}`} />
                                <h4>{country.name}</h4>
                            </div>
                        ))}
                    </div>
                    <button className='nav-button' onClick={handleNext}>▶</button>
                </div>
            </section>

            <section className='sect_acolher3'>
                <div className='abri'>
                    <h1>Abrigos:</h1>
                </div>

                <div className='inf_ongs'>
                    {selectedCountry && shelters[selectedCountry].map((shelter, index) => (
                        <div className='same_inf' key={index}>
                            <img src={shelter.img} alt="Abrigo" />
                            <h6>{shelter.description}</h6>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Acolhimento;
