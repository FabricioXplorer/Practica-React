import "./ListaOpciones.css"

const ListaOpciones=(props)=>{
    const lpersonajes=[
        "Anime",
        "Series",
        "Peliculas",
        "Meme",
        "Fantasia",
        "RRSS",
        "Historias"
    ]
    const cambio2=(e)=>{
        props.actualizarEquipo(e.target.value)
    }
    return <div className='lista-opciones'>
        <label>Equipo</label>
        <select value={props.valor} onChange={cambio2} >
            <option value="" disabled defaultValue="" >Seleccione su equipo</option>
            {lpersonajes.map((lpersonajes,index)=> 
            <option key={index}>{lpersonajes}</option>)}
        </select>
    </div>
}
export default ListaOpciones