import { useState } from 'react'
import	CerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal,animarModal,setAnimarModal}) => {

    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");

    const ocultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(()=>{
            setModal(false)
            
        },500)
    }
    return ( 
        <div className="modal"> 
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="cerrar modal" 
                    onClick={ocultarModal}
                    />
            </div>
            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        type="text" 
                        placeholder='Añade el Nombre del Gasto'
                        id='nombre'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        type="number" 
                        placeholder='Añade la Cantidad del Gasto: ej 300'
                        id='nombre'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        name="" 
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(Number(e.target.value))}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input 
                    type="submit"
                    value="AÑADIR GASTO"    
                />
            </form>
        </div>
     );
}
 
export default Modal;