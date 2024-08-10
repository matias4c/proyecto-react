import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import cartelQuitadoCarrito from '/src/cartelQuitar.js'


const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito, restarCantidad } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handleRestarCantidad = (nombre) => {
        restarCantidad(nombre);
    }

  return (
    <section>
            <div className='contenedorCarrito'>
                <div className="carrito">
                    <div className="carrito_title">
                        <h4>Mi carrito</h4>
                    </div>

                    {
                        carrito.length > 0 ?
                        <>
                            <div className="contenidoCarrito" >
                                {
                                carrito.map((prod) => (
                                        <div className='carritoElement' key={prod.id}>
                                            <div><img className="elementImg" src={prod.imagen} alt={prod.nombre} /></div>
                                            <div className="elementInfo">
                                                <div className="elementInfoHijo">
                                                    <p>{prod.nombre}</p>
                                                    <p><small>{prod.cantidad} x </small>  <span>${prod.cantidad * prod.precio}</span></p>
                                                </div>
                                            </div>
                                            <button className="boton-eliminar-producto" onClick={() => {handleRestarCantidad(prod.nombre); cartelQuitadoCarrito()}}><i className="bx bx-trash"></i></button>
                                        </div>    
                                ))}
                            </div>

                            <div id="carrito-boton-total" className="botonPrecioTotal">
                                <div className="carritoTotal">
                                    <p className="text-total">Total: ${precioTotal()}</p>
                                </div>
                                <div className="contenedorCarritoBotones">
                                    <button className="carritoBotonVaciar" onClick={handleVaciar}>Vaciar todo</button>
                                    <Link to="/checkout" className="carritoBotonComprar">Finalizar compra</Link>
                                </div>
                            <Link to={"/"} className="boton-agregar back">Volver</Link>
                            </div>
                        </> : 
                        
                        <>
                            <div className="carritoVacio">
                               <img src="/public/empty-cart.png" alt="empty-cart"/>
                               <p>Tu carrito está vacío!</p>
                            </div>
                            <Link to={"/"} className="boton-agregar back">Volver</Link>
                        </>
                    }


                </div>
                
            </div>
    </section>
  )
}

export default Cart;
