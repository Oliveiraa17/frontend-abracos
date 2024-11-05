import '../Styles/Cadastro.css'

function Cadastro() {
    return( <>
        <section className='sec_cad'>
            <nav className='nav_cad'>
                <nav className='div_cad'>
                    <div className='colocar_margin'>
                        <h2>Nome completo:</h2>
                            <input type="text" name="nome" className="nome_cad" />
                        <h2>Email:</h2>
                            <input type="text" name="email" className="emai_cad" />
                        <h2>Número de telefone:</h2> 
                        <div className='colocar_display'>
                            <h2>+55</h2>
                                <input type="number" name="telefone" id="telefone_cad" maxLength={11}/>
                        </div>
                        <h2>Crie uma senha:</h2>
                            <input type="text" name="senha" id="senha_cad" />
                        <h2>Confirme a senha:</h2>
                            <input type="text" name="Confirmar_senha" id="confirmar_senha_cad" /><br></br>
                            <input className='botao_cad' type="button" value="Cadastrar" />
                    </div>
                </nav>
            </nav>
        </section>
        </>
    )
}

export default Cadastro