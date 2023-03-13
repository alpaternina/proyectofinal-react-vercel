import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";

export const ItemDetail = ({prod}) => {
    
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    const onAdd= (cantidad) => {
        addItem(prod, cantidad)
    }
    
    return (
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={prod.img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className={`card-body ${darkMode && "itemDetailBodyDark"}`}>
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Modelo: {prod.idCategoria}</p>
                <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                <p className="card-text">Stock: {prod.stock}</p>
                <ItemCount ValInicial={1} stock={prod.stock} onAdd={onAdd} textBoton= "Agregar al carrito"/>
                <Link className="nav-link" to={'/cart'}><button className="btn btn-dark">Finalizar Compra</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
}


