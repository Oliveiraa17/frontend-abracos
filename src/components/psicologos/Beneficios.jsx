import '../Styles/Psicologos.css'

function Beneficios({foto, texto}){
    return(
        <section className='Laranjaa'>
            <div className='tudo'>
                <div className='imagens'>
                    <img src={foto} alt="" />
                </div>
                <div className='especificacoes'>
                    <p>{texto}</p>
                </div>
                
            </div>
        </section>
    )
}

export default Beneficios