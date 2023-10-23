import "./pagina.css"
import Peliculas from "../peliculas/index.js";

const Pagina =(props)=>{
    console.log(props);
return <div>
<section className='paginaSection'>
<h3 className='title'>Mis Personajes</h3>
<img src='/img/boton.png' alt='add' onClick={props.cambiarMostrar}></img>
</section>
<Peliculas></Peliculas>
</div>
}
export default Pagina