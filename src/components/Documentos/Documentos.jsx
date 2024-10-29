import '../Styles/Documentos.css';
import Regularizacao from './Regularizacao';
import Formulario from './Formulario';
import Processo from './Processo';
import Mapa from './Mapa'


function Documentos(){
    return (
        <section>
            <div className="run">

            </div>
            <div>
                <Regularizacao></Regularizacao>+
                <Formulario></Formulario>
                <Processo></Processo> 
                {/* <Mapa></Mapa> */}
            </div>
        </section>
    )

}
export default Documentos
