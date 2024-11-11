import '../Styles/Documentos.css';
import Regularizacao from './Regularizacao';
import Formulario from './Formulario';
import Processo from './Processo';
import LocalizadorMapa from './LocalizadorMapa';


function Documentos(){
    return (
        <section>
            <div className="run">

            </div>
            <div>
                <Regularizacao></Regularizacao>
                <Processo></Processo> 
                <Formulario></Formulario>
                <LocalizadorMapa></LocalizadorMapa>
            </div>
        </section>
    )

}
export default Documentos
