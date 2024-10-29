import '../Styles/SobreNos.css'

function Descricao({ imagem, texto, titulo }) {
    return (
        <section className="SobreNos">
            <div className='imgdescricao'>
                <img src={imagem} alt="" />
            </div>

            <div className='sobreNos-h1'>
                <h1>{titulo}</h1>
                <p>{texto}</p>
            </div>
        </section>
    )


}
export default Descricao