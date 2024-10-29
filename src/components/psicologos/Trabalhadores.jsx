import '../Styles/Psicologos.css'


function Trabalhadores ({foto, titulo, paragrafo, trabalhador}) {

    return(
        <>
            <section className='borda'>
                <div className='tudooo'>
                    <div className='foto'>
                        <img src={foto} alt={trabalhador} />
                    </div>
                    <div className='cards_psicologos'>
                        <h4>{titulo}</h4>
                        <div className='estrela'>
                            ⭐4,8
                        </div>
                    </div>
                    <div className='especificacao'>
                        <p className='resumo'>{paragrafo}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trabalhadores