const NuevoPresupuesto = () => {
    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" action="">
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input 
                        type="text" 
                        className="nuevo-presupuesto"
                        placeholder="Añade Tu Presupuesto"
                    />
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
     );
}
 
export default NuevoPresupuesto;