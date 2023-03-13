import { Link } from "react-router-dom";
import React from "react";
export const Categorias = React.memo(() => {
    return (

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark" >Categorias</button>
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={'/category/OH'}>Bombas OH</Link></li>
              <li><Link className="dropdown-item" to={'/category/BB'}>Bombas BB</Link></li>
              <li><Link className="dropdown-item" to={'/category/VS'}>Bombas VS</Link></li>
            </ul>
        </li> 

    );
}
)