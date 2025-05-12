import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';
import './App.css'


import Aleatorios from './components/aleatorios'
import Capturados from'./components/capturados'
import Lista from './components/lista'
import Favoritos from './components/favoritos'
import Pokemon from './components/pokemon'
import Usuarios from './components/usuarios'
import Menu from './components/menu'

function App() {
  

  return (

    <AppProvider>
    <Router>
    <Menu/>
      <Routes>
      <Route path= "/" element={<Lista/>}/>
        <Route path= "/aleatorios" element={<Aleatorios/>}/>
        <Route path= "/capturados" element={<Capturados/>}/>
        <Route path= "/favoritos" element={<Favoritos/>}/>
        <Route path= "/usuarios" element={<Usuarios/>}/>
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
    </AppProvider>
    
  )
}

export default App
