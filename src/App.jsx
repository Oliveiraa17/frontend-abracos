import SobreNos from './components/SobreNos/SobreNos';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/home/Header';
import Psicologos from './components/psicologos/Psicologos';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import Cards from './components/cards/Cards';
import Pagina1 from './components/cards/pag2/pagina1';
import Cursos from './components/Cursos/Cursos';
import Empregabilidade from './components/Empregados/Empregabilidade'
import Empresas from './components/Empresas/Empresas';
import Videoaulas from './components/videoaulas/Videoaulas';
import Documentos from './components/Documentos/Documentos';
import Doe from './components/Doe/Doe';
import GTranslate from './components/GTranslate';
import Voluntarios from './components/voluntarios/Voluntarios';
import Acolhimento from './components/Acolhimento/Acolhimento';
function App() {

  
  return (
    <>
      <Router basename='/frontend-abracos'>
        <GTranslate></GTranslate>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cards' element={<Cards />} />
          <Route path='Doe' element={<Doe />} />
          <Route path='Psicologos' element={<Psicologos />} />
          <Route path='hospital' element={<Pagina1/>}/>
          <Route path='mercado' element={<Pagina1/>}/>
          <Route path='Polícia' element={<Pagina1/>}/>
          <Route path='Banco' element={<Pagina1/>}/>
          <Route path='Compras' element={<Pagina1/>}/>
          <Route path='Transporte' element={<Pagina1/>}/>
          <Route path='Alimentação' element={<Pagina1/>}/>
          <Route path='MainSection' element={<Pagina1/>}/>
          <Route path='Alimentação' element={<Pagina1/>}/>
          <Route path='Saudações' element={<Pagina1/>}/>
          <Route path='SobreNos' element={<SobreNos/>}/>
          <Route path='Cursos' element={<Cursos/>}/>
          <Route path='Empregar' element={<Empregabilidade/>}/>
          <Route path='Empresas' element={<Empresas/>}/>
          <Route path='Videoaulas' element={<Videoaulas/>}/>
          <Route path='Documentacao' element={<Documentos/>}/>
          <Route path='form' element={<Voluntarios/>}/>
          <Route path='Acolhimento' element={<Acolhimento/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
