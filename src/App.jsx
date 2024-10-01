import Navbar from './components/Navbar.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from './pages/details/detail.jsx';
import Home from './pages/Home.jsx';

const Peliculas = () => {
    return (<h1>DETAL</h1>)
}

const Noticias = () => {
    return (<h1>Noticias</h1>)
}

function App() {
    return (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/peliculas" element={<Peliculas />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/detail/:id" element={<Detail />} /> {/* Ruta ejemplo para detalles */}
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App