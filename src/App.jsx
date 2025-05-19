import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from
'react-router-dom';
import { AppProvider } from './contexto/contexto';

import { supabase } from "./supabase";
import Menu from './components/menu';
import Aleatorios from './components/aleatorios';
import Lista from './components/lista';
import Capturados from './components/capturados';
import Favoritos from './components/favoritos';
import Usuarios from './components/usuarios';
import Pokemon from './components/pokemon';
import Login from './components/login';
import Registro from './components/registro';
import Administrador from './components/administrador';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
    const { data: { session } } = await supabase.auth.getSession();
    setUsuario(session?.user || null);
    setCargando(false);
  }
verificarSesion();

// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {

setUsuario(session?.user || null);
});
}, []);

if (cargando) return <p>Cargando...</p>;
return (
<AppProvider>
<Router>
{usuario && <Menu />}

  <Routes>
    <Route path="/" element={usuario ? <Lista /> : <Navigate to="/login"/>} />
    <Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
    <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />  
    <Route path="/capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
    <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
    <Route path="/detalle/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/registro" element={<Registro/>} />
    <Route path="/administrador" element={<Administrador/>} />
  </Routes>
</Router>
</AppProvider>
);
}
export default App;