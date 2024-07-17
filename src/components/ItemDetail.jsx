import { Link } from "react-router-dom";

const ItemDetail = ({nombre, id, precio, imagen}) => {
  return (
      <div className="contenedorDetail">
          <div className="divDetail">
              <h2 className="detail">Detalles</h2>
              <img className="imgDetail" src= {imagen} alt= {nombre} />
              <div className="productInfo">
                  <div className="infoDetail">
                      <h2 className="nombreDetail">{nombre}</h2>
                      <h3 className="precioDetail">Precio: ${precio}</h3>
                      <span>DISPONIBLE</span>
                  </div>
                  <button className="boton-agregar" id={id}>Agregar <i className='bx bx-cart bx-sm'></i></button>
              </div>
              <Link to={"/"} className="boton-agregar back" id={id}>Volver</Link>
          </div>
      </div>
  )
}

export default ItemDetail;
