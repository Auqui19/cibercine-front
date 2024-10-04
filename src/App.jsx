import Navbar from './components/Navbar.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Detail from './pages/details/Detail.jsx';
import Noticias from './pages/news/Noticias.jsx';
import SeatSelection from '../src/components/SeatSelection.jsx';

const Peliculas = () => {
    return (<h1>DETAL</h1>)
}

function App() {
    return (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/peliculas" element={<Peliculas />} />
              <Route path="/noticias" element={<Noticias/>} />
              <Route path="/detalle/:title" element={<Detail/>} />
              <Route path="/seleccion-butacas" element={<SeatSelection />} />
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App