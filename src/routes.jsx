// filepath: /workspaces/ProjectoDPW/src/routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Noticias from './routes/noticias';
import Resultados from './routes/resultados';
import Equipos from './routes/equipos';
import Calendario from './routes/calendario';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/noticias" element={<Noticias noticias={[]} />} />
        <Route path="/resultados" element={<Resultados resultados={[]} />} />
        <Route path="/equipos" element={<Equipos equipos={[]} />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}