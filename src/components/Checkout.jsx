import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { db } from "../services/firebase";
import { addDoc, collection } from 'firebase/firestore';


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if(pedidoId) {
        return(
            <div className='contenedor-pedido'>
                <div className='contenido-pedido'>
                    <h1>Muchas gracias por tu compra</h1>
                    <p>Tu número de pedido es: {pedidoId}</p>
                    <Link to={"/"} className="boton-agregar">Volver</Link>
                </div>
            </div>
        )
    }

  return (
    <>
      <section className="contenedorDatos" id="contenedorDatos">
            <div className="principal-datos" id="principal-datos">
                <h1 className="principal-titulo">Tus datos</h1>
                <form className="formulario-datos" onSubmit={handleSubmit(comprar)}>
                    
                    <div className="row">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutNombre" placeholder="Nombre" required {...register("nombre")} />
                                <label htmlFor="checkoutNombre">Nombre</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutApellido" placeholder="Apellido" required {...register("apellido")} />
                                <label htmlFor="checkoutApellido">Apellido</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md col-md-7">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="checkoutEmail" placeholder="E-mail" required {...register("email")} />
                                <label htmlFor="checkoutEmail">E-mail</label>
                            </div>
                        </div>
                        <div className="col-md col-md-5">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutTelefono" placeholder="Teléfono" required {...register("telefono")} />
                                <label htmlFor="checkoutTelefono">Teléfono</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutProvincia" placeholder="Provincia" required />
                                <label htmlFor="checkoutProvincia">Provincia</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutCiudad" placeholder="Ciudad" required />
                                <label htmlFor="checkoutCiudad">Ciudad</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md col-md-5">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutCalle" placeholder="Calle" required />
                                <label htmlFor="checkoutCalle">Calle</label>
                            </div>
                        </div>
                        <div className="col-md col-md-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutNumeroPisoDepto" placeholder="Número / Piso / Depto" required />
                                <label htmlFor="checkoutNumeroPisoDepto">Número / Piso / Depto</label>
                            </div>
                        </div>
                        <div className="col-md col-md-3">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="checkoutCodigoPostal" placeholder="Código Postal" required />
                                <label htmlFor="checkoutCodigoPostal">Código Postal</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary"><h6>Confirmar datos</h6></button>

                </form>
            </div>

        </section>
    </>
  )
}

export default Checkout;
