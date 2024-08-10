import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({nombre, id, precio, imagen, stock}) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const item = {
        nombre, id, precio, imagen, stock
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    }

    return (
        <div className="contenedorDetail">
            <div className="divDetail">
                <h2 className="detail">Detalles</h2>
                <img className="imgDetail" src= {imagen} alt= {nombre} />
                <div className="productInfo">
                  <div className="infoDetail">
                      <h2 className="nombreDetail">{nombre}</h2>
                      <h3 className="precioDetail">Precio: ${precio}</h3>
                      <span>DISPONIBLE <span>(cantidad {stock})</span></span>
                  </div>
                   <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar}
                   handleAgregar={() => { agregarAlCarrito(item, cantidad)}} />
                </div>
              <Link to={"/"} className="boton-agregar back" >Volver</Link>
            </div>
        </div>
    )
}

export default ItemDetail;