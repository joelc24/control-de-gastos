import { useState } from "react";
import Mensaje from "./Mensaje";



const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto,
    setIsValidPresupuesto
}) => {
    
    const [mensaje, setMensaje] = useState('');
    

    const handlePresupuesto = (e) => {
        e.preventDefault();
        console.log('Enviando Formulario')
        if(!presupuesto || presupuesto < 0){
            setMensaje('No es Un presupuesto Valido')
            setPresupuesto('')
            return;
        }
        setMensaje('')
        setIsValidPresupuesto(true)

    }
    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" action="" onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input 
                        type="number" 
                        className="nuevo-presupuesto"
                        placeholder="Añade Tu Presupuesto"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
     );
}
 
export default NuevoPresupuesto;