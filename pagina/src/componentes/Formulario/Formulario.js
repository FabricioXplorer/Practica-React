import './Formulario.css'
import Texto from '../Texto/Texto.js'

const Formulario =()=>{
    return <section className='formulario'>
        <form>
            <h2>Rellena el formulario para crear un nuevo Personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar Nombre"/>
        </form>
    </section>
}