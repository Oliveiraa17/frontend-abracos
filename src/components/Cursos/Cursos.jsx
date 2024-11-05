import { Link } from 'react-router-dom'
import certificado from '../../../public/assets/gifs/certificado.gif'
import cofrinho from '../../../public/assets/gifs/cofrinho.gif'
import curriculo from '../../../public/assets/gifs/curriculo.gif'
import desenvolvimento from '../../../public/assets/gifs/desenvolvimento.gif'
import metodologias from '../../../public/assets/gifs/metodologias.gif'
import produtividade from '../../../public/assets/gifs/produtividade.gif'
import resultados from '../../../public/assets/gifs/resultados.gif'
import lupa from '../../../public/assets/images/lupa.png'
import '../Styles/Cursos.css'

import azul from '../../../public/assets/images/img_azul_cursos.png'
import quadrado_laranja from '../../../public/assets/images/quadrado_laranja.png'

function Cursos(){
    return(
        <>
            {/* IMAGEM DE FUNDO */}
        <section className='contentPrincipal'>
            <div className='barra_laranja_pesquisa'>
                <input type="text" name="buscar" className='buscar' placeholder='Busque aqui' title='buscar'/>
                <img src={lupa} alt="lupa" className='lup'/>
            </div>

            <div className="fundo_cursos" title='Aprenda Português' alt='Aprenda português'>
                <div><p className='palavra_aprender'>Aprenda<br /></p> <p><span className='ptt'>Português</span></p></div>

                <div className='div_branca' title='Escreva o que quer aprender aqui'>
                    <h4 className='O_que_você_quer_aprender'>O que você quer aprender?</h4>
                    <div className='colocar_display'>
                        <img src={lupa} alt="lupa" className='lupa2'/>
                        <input type="text" name='aprender' placeholder='diálogos, gramática...' className='buscarr'/>
                    </div>
                </div>
            </div>
        </section>

            {/* PARTE DA BANDEIRA: */}
        <div className='colocar_displayy' title='Aprende mais aqui' alt='Aprende mais sobre...'>
            <section className='fundo_bandeira'>
                <h1 className='aproveitar'>Aproveite para aprender mais sobre:</h1>
                <nav className='display_branca'>
                    <div className='div_brancona'>
                        <img className='img_branca' src={produtividade} alt="Produtividade" title='Produtividade' />
                        <p className='paragrafo_branco'>Produtividade</p>
                    </div>
                    <div className='div_brancona'>
                        <img className='img_branca' src={desenvolvimento} alt="Desenvolvimento" title='Desenvolvimento'/>
                        <p className='paragrafo_branco'>Desenvolvimento</p> <p className='paragrafo_branco'>pessoal e profissional</p>
                    </div>
                    <div className='div_brancona'>
                        <img className='img_branca' src={metodologias} alt="Metodologias" title='Metodologias de Aprendizagem'/>
                        <p className='paragrafo_branco'>Metodologias de</p> <p className='paragrafo_branco'>Aprendizagem</p>
                    </div>
                </nav>
            </section>
        </div>

            {/* DIFERENCIAIS: */}
        <section className='diferenciais'>
                <h1 className='h1_diferenciais'>Diferenciais</h1>
                    <div className='colocar_displayyy'>
                        <p className='p_beneficios'>Benefícios que você ira querer!</p>
                        <button className='ComeceAq' title='Comece Aqui' alt='Comece_Aqui'><Link to='/Videoaulas'>Comece Aqui</Link></button>
            </div>
            <div className='colocar_displayy'>
                <div className='div_azul' title='Diferenciais' alt='Diferenciais'>
                    <div className='div_diferenciais'>
                        <img className='img_diferenciais' src={cofrinho} alt="" />
                        <p className='parag_dif'>Estudo sem</p> <p className='parag_dif'>custo</p>
                    </div>
                    <div className='div_diferenciais'>
                        <img className='img_diferenciais' src={curriculo} alt="" />
                        <p className='parag_dif'>Turbine seu</p> <p className='parag_dif'>currículo</p>
                    </div>
                    <div className='div_diferenciais'>
                        <img className='img_diferenciais' src={certificado} alt="" />
                        <p className='parag_dif'>conquiste o seu</p> <p className='parag_dif'>certificado</p>
                    </div>
                    <div className='div_diferenciais'>
                        <img className='img_diferenciais' src={resultados} alt="" />
                        <p className='parag_dif'>tenha os melhores</p> <p className='parag_dif'>resultados</p>
                    </div>
                </div>
            </div>
        </section>

            {/* OBJETIVOS: */}
            <h1 className='h1_obj'>Objetivos</h1>
        <div className='objetivos'>
            <img className='img_laranja1' src={quadrado_laranja} alt="imagem laranja na ponta esqueda" />
            <p className='p_obj'>Em termos gerais, o nosso curso visa ensinar português de forma descomplicada além de aumentar conhecimentos e habilidades de imigrantes e refugiados. Para  viabilizar isso, estabelecemos dois objetivos principais:</p>
            <img className='img_laranja2' src={quadrado_laranja} alt="imagem laranja na ponta direita" />
        </div>

        <div className='paragrafos_obg'>
            <p className='paragrafo1_obj'>
                1. Apoio a transição para o mercado de trabalho, com o objetivo de promover a total inclusão social e financeira desses indivíduos.
                
            </p>
            <p className='paragrafo2_obj'>
                2. Permitir que refugiados e imigrantes interajam com a sociedade e tenham acesso aos seus  direitos básicos.
            </p>
        </div>
        <img className='div_azul_cursos' src={azul} alt="listra azul no final da tela" />
    </>   
    )
}
export default Cursos