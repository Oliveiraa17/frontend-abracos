import '../Styles/Acolhimento.css'
import venezuela from '../../../public/assets/images/venezu.svg'
import siria from '../../../public/assets/images/siria.svg'
import haiti from '../../../public/assets/images/haiti.svg'
import abrace from '../../../public/assets/images/abrace.svg'
import acolhida from '../../../public/assets/images/acolhida.svg'
import fraternidade from '../../../public/assets/images/fraternidade.svg'


function Acolhimento() {
    return(
        <section className='sect_acolher'>
            <section className='acolher'>
                <h1>Acolher é um ato de <span>amor!</span></h1>
            </section>

            <section className='sect_acolher2'>
                <div className='naci'>
                    <h1>Escolha sua Nacionalidade:</h1>
                </div>

                <div className='paiband'>
                    <div className='same_band'>
                        <img src={venezuela} alt="Bandeira Venezuela" />
                        <h4>Venezuela</h4>
                    </div>

                    <div className='same_band'>
                        <img src={siria} alt="Bandeira Síria" />
                        <h4>Síria</h4>
                    </div>

                    <div className='same_band'>
                        <img src={haiti} alt="Bandeira Haiti" />
                        <h4>Haiti</h4>
                    </div>
                </div>

                <section className='sect_acolher3'>
                    <div className='abri'>
                        <h1>Abrigos:</h1>
                    </div>

                    <div className='inf_ongs'>
                        <div className='same_inf'>
                            <img src={acolhida} alt="ONG Acolhida" />
                            <h6>Iniciativa do governo federal com apoio da ONU, que oferece acolhimento temporário em abrigos em Boa Vista e Pacaraima, além de programas de interiorização para outras regiões do Brasil.</h6>
                        </div>

                        <div className='same_inf'>
                            <img src={abrace} alt="ONG Abrace" />
                            <h6>Oferece suporte específico para refugiados venezuelanos em regiões com alta demanda de acolhimento.</h6>
                        </div>

                        <div className='same_inf'>
                            <img src={fraternidade} alt="ONG Fraternidade" />
                            <h6>Atua em abrigos em Roraima, oferecendo moradia temporária e apoio humanitário aos refugiados venezuelanos.</h6>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Acolhimento