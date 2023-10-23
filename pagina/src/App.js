import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Pagina from './componentes/pagina';

function App() {
//const [variable y asignacion]=useState(valor inicial)
const [mostrarFormulario,actualizarFormulario]=useState(true)
const cambiarMostrar=()=>{
  actualizarFormulario(!mostrarFormulario)
}
  return (
   <div>
    <Header/> 
    {mostrarFormulario && <Formulario/> }
    <Pagina cambiarMostrar={cambiarMostrar}/>
   </div>
  );
}

export default App;
