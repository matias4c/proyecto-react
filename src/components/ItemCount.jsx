import React from 'react';
import cartelAgregadoCarrito from '/src/cartelAgregar.js'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  

  return (
    <div className="contenedor-botones">
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="boton-agregar" onClick={() => {handleAgregar(); cartelAgregadoCarrito();}}>Agregar <i className='bx bx-cart bx-sm'></i></button>
    </div>
  )
}

export default ItemCount;