import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { toCapital } from "../toCapital"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Todos los productos");

  const categoria = useParams().categoria;

  useEffect(() => {

    const productosRef = collection(db, "productos");

    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;


    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        );
      })

  }, [categoria])

  return (
    <div className="contenido">
      <div className="contenedorFiltros">
          <h4>Categorias</h4>
          <ul className="listaFiltros">
            <li><Link to={"/"} className="boton-filtro boton-filtro-estilo" id="todos">Todos los productos</Link></li>
            <li><Link to={"/category/mouse"} className="boton-filtro boton-filtro-estilo" id="mouse">Mouse</Link></li>
            <li><Link to={"/category/teclado"} className="boton-filtro boton-filtro-estilo" id="mouse">Teclado</Link></li>
            <li><Link to={"/category/auriculares"} className="boton-filtro boton-filtro-estilo" id="auriculares">Auriculares</Link></li>
            <li><Link to={"/category/mousepad"} className="boton-filtro boton-filtro-estilo" id="mousepad">Mouse Pad</Link></li>
          </ul>
      </div>
      <div className="contenedorProductosConTitulo">
        <h1 className="tituloSeccionProductos">{toCapital(titulo)}</h1>
        <div id="contenedorProductos" className="contenedorProductos">                  
          <ItemList productos={productos} />
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;
