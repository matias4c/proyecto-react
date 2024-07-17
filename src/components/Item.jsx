import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
        <div className="productDiv">
            <img className="productImg" src={producto.imagen} alt={producto.nombre} />
            <h2 className="productoNombre">{producto.nombre}</h2>
            <div className="productInfo">
                <div>
                    <span>DISPONIBLE</span>
                    <h3 className="productoPrecio">${producto.precio}</h3>
                </div>
                <Link className="boton-vermas" to={`/detail/${producto.id}`}>Ver Mas</Link>
                {/* <button className="boton-agregar" id={producto.id}>Agregar</button> */}
            </div>
        </div>
  )
}

export default Item;
