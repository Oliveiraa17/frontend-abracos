import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/assets/images/Logo.png';
import '../styles/Header.css';

function Header() {
    const [active, setMode] = useState(false);

    const ToggleMode = () => {
        setMode(!active);
    };

    return (
        <>
            <header>
                <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                    <div className='hamburguer hamburgerIcon'></div>
                </div>
                <div className="logo">
                    <Link to='/'><img src={img} alt="Logo" /></Link>
                </div>
                <nav className={active ? 'menu menuOpen' : 'menu menuClose'}>
                    <div className='List'>
                        <ul>
                            <li className='nav-link'><Link to='/'>Home</Link></li>
                            <li className='nav-link'><Link to='Psicologos'>Psicólogos</Link></li>
                            <li className='nav-link'><Link to='Cursos'>Cursos</Link></li>
                            <li className='nav-link'><Link to='cards'>Cards</Link></li>
                            <li className='nav-link'><Link to='Documentacao'>Documentação</Link></li>
                            <li className='nav-link'><Link to='SobreNos'>Sobre</Link></li>
                            <li className='nav-link'><Link to='Doe'>Doe</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className='area_cadastro'>
                    <div className='login'><Link to='login'>Entrar</Link></div>
                    <div className='cadastro'><Link to='Cadastro'>Cadastre-se</Link></div>
                </div>
            </header>
        </>
    );
}

export default Header;
