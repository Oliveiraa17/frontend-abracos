import '../Styles/Documentos.css';
import Regularizacao from './Regularizacao';
import Formulario from './Formulario';
import Processo from './Processo';


function Documentos(){
    return (
        <section>
            <div className="run">

            </div>
            <div>
                <Regularizacao></Regularizacao>
                <Formulario></Formulario>
                <Processo></Processo> 
            </div>
        </section>
    )

}
export default Documentos
