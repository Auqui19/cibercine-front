import Navbar from './components/Navbar.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Detail from './pages/details/Detail.jsx';
import Noticias from './pages/news/Noticias.jsx';
import SeatSelection from '../src/components/SeatSelection.jsx';
import Confiteria from '../src/components/Confiteria.jsx';
import MetodosPago from '../src/components/MetodosPago.jsx';
import ConfirmacionPago from '../src/components/ConfirmacionPago.jsx';
import TicketSelection from '../src/components/TicketSelection.jsx';




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
              <Route path="/ticket-selection" element={<TicketSelection />} />
              <Route path="/confiteria" element={<Confiteria />} />
              <Route path="/metodos-pago" element={<MetodosPago />} />
              <Route path="/confirmacion-pago" element={<ConfirmacionPago />} />
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App