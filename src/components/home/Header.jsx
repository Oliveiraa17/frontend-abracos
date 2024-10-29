import '../styles/Header.css'
import { Link } from 'react-router-dom';
import img from '../../../public/assets/images/Logo.png'

function Header() {

    return (
        <>
            <header>
                <div className="logo">
                    <Link to='/'><img src={img} alt="Logo" /></Link>
                </div>
                <nav>
                    <ul>
                        <li className='nav-link' ><Link to='/'>Home</Link></li>
                        <li className='nav-link' ><Link to='Psicologos'>Psicólogos</Link></li>
                        <li className='nav-link'><Link to='Cursos'>Cursos</Link></li>
                        <li className='nav-link'><Link to='cards'>Cards</Link></li>
                        <li className='nav-link'><Link to='Documentacao'>Documentação</Link></li>
                        <li className='nav-link'><Link to='SobreNos'>Sobre</Link></li>
                        <li className='nav-link'><Link to='Doe'>Doe</Link></li>
                    </ul>
                </nav>
                <div className='area_cadastro'>
                    <div className='login'><Link to='login'>Entrar</Link></div>
                    <div className='cadastro'><Link to='Cadastro'>Cadastre-se</Link></div>
                </div>
            </header>
            
            
        </>
    )
}
export default Header