import '../Styles/Doe.css'
import Vida1 from '../../../public/assets/images/vida1.svg'
import Vida2 from '../../../public/assets/images/vida2.svg'
import Vida3 from '../../../public/assets/images/vida3.svg'
import Auladoe from '../../../public/assets/images/doeaula.svg'

function Doe() {
    return(
        <section>
            <section className='instu'>
                <div className='imagemdoe'>
                    <div className='fraseseffect'>
                        <h1 className='texto_apoie'>Apoie essa causa!</h1>
                        <p className='texto_contribua'>contribua e transforme <span>vidas</span> conosco</p>
                    </div>
                </div>
            </section>

            <section className='why'>
                <div className='hrt'>
                    <h1>Por que devo apoiar o Abraços?</h1>
                </div>
            </section>

            <section className='threcards'>
                <div className='samecards'>
                    <img src={Vida1} alt="" />
                    <div className='threfrases'>
                        <p>Transformamos vidas com informações confiáveis</p>
                    </div>
                </div>

                <div className='samecards'>
                    <img src={Vida2} alt="" />
                    <div className='threfrases'>
                        <p>Juntos, promovemos um futuro mais inclusivo.</p>
                    </div>
                </div>

                <div className='samecards'>
                    <img src={Vida3} alt="" />
                    <div className='threfrases'>
                        <p>Parceiros comprometidos com a valorização da diversidade</p>
                    </div>
                </div>
            </section>

            <section className='sectionwhy'>
                <div className='whyimpor'>
                    <p>Qual a importância de apoiar o Abraços?</p>
                </div>
            </section>

            <section className='youtubedoe'>
                <div>
                <div className='doeimagem'>
                    <img src={Auladoe} alt="Aula Doe" />
                </div>
                </div>
            </section>

            <section className='imagembolas'>
                <div className='imagemdoe3'>
                    <div className='fundotorcida'>
                        <h1>Junte-se a nós e faça a <span>diferença!</span></h1>
                        <div className='taro'><button className='botonapoiar'>Quero Apoiar</button></div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Doe