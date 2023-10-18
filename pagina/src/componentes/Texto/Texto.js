import './Texto.css'
const Texto=(props)=>{

    const placeHolderModificado=`${props.placeholder}...`
    return <div className='texto'>
        <label>{props.Titulo}</label>
        <input placeholder={placeHolderModificado}></input>   
    </div>
}
export default Texto