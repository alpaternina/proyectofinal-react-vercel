import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"

export const Cart = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    return (
        <>
        {
        carrito.length === 0
        ? // Si no existen productos ne el carrito
        <>
        <h2>Carrito vacio</h2>
        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
        </>
        : // Si existen productos ne el carrito
        <div className="container cartContainer">
         <ItemList prods={carrito} plantilla="ItemCart"/>
         <div className="divButtons">
            <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
         </div>
        </div>
        }
        </>
    )
}
    
/*     return (
        <div>
            
            <h1>Carrito</h1>

        </div>
    ); */

/* Primer Metodo de Rendering - Complejidad de 6
export const Cart = () => {
   
    const cond = true
    if(cond){
        return <h2>Es Verdadero</h2>
    }

    return <h2>Es Falso</h2>
}*/

/* Segundo metodo de Rendering - complejidad de 6

export const Cart = () => {
   
    const cond = true
    return (
        <>
        {cond && <h2>Es Verdadero</h2>}
        {!cond && <h2>Es Falso</h2>}
        </>
    )
    }
*/

/* Tercer metodo de rendering - complejidad de 5

  const cond = true
    return (
        <>
        {cond ? <h2>Es Verdadero</h2> : <h2>Es Falso</h2>}
        </>
    )
    }
*/