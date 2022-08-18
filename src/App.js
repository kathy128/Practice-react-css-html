import React from 'react';
import './App.scss';
import Fondo from './components/Fondo/Fondo';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Colores from './pages/flipper/colores';
import Contador from './pages/contador';
import Autenticacion from './pages/autenti';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"></link>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Fondo/>}/>
          <Route path='/colores' element={<Colores/>}/>
          <Route path='/contador' element={<Contador/>}/>
          <Route path='/autenticacion' element={<Autenticacion/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
