import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import swal from 'sweetalert'

const ControlPresupuesto = ({presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGastado

        //Calcular Porcentaje Gastado
        const nuevoPorcentaje = ((( presupuesto - totalDisponible) / presupuesto * 100).toFixed(2))

        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(()=>{
            setPorcentaje(nuevoPorcentaje)

        },1500)
    },[gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () =>{
        
        swal({
            title: "Esta seguro?",
            text: "¿Deseas Reiniciar Presupuesto y Gastos?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            
            if (willDelete) {
              swal("Presupuesto y Gastos Reiniciados!", {
                icon: "success",
              }).then(e => {
                setGastos([])
                setPresupuesto(0)
                setIsValidPresupuesto(false)
              })
            } else {
              swal("La Eliminacion Ha Sido Cancelada!");
            }
          })

       
    }

    return ( 
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Restear App
                </button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo': ''}`}>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
     );
}
 
export default ControlPresupuesto;