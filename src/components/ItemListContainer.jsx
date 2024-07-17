import { useEffect, useState } from "react";
import { pedirItem, pedirItemPorCategoria } from "../pedirDatos";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { toCapital } from "../toCapital"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const {categoria} = useParams();
  const [titulo, setTitulo] = useState("Todos los productos");

  useEffect(() => {
      if(!categoria){
        pedirItem()
          .then((res) => { setProductos(res); setTitulo("Todos los productos"); })
      } else {
        pedirItemPorCategoria(categoria)
          .then((res) => { setProductos(res); setTitulo(categoria); })
      }
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
