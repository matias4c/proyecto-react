import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = (props) => {
    return (
        <header>
            <div className="nav-top">
                <div className="logo-nombre">
                    <Link to="/"><img src="/public/icon.png" className="logo" alt="logo" /></Link>
                    <h4>MCompu</h4>
                </div>
                <div className="search">
                    <input type="text" placeholder="¿Que estas buscando?" />
                    <button><i className='bx bx-search'></i></button>
                </div>
                <div className="wsp">
                    <a target="_blank" href="web.whatsapp.com"><i className='bx bxl-whatsapp bx-lg'></i></a>
                    <p>Whatsapp<br />+543510000000</p>
                </div>
            </div>
            <nav className="menu">
                <div className="top-mn">
                    <button className="btn-producto-desplegable">
                        <i className='bx bx-menu-alt-left bx-sm'></i>
                        <p>Productos</p>
                        <i className='bx bx-chevron-down bx-xs'></i>
                    </button>
                    <ul>
                        <li><Link to={"/"}>Marcas<i className='bx bx-chevron-down'></i></Link></li>
                        <li><Link to={"/"}>Ofertas</Link></li>
                        <li><Link to={"/"}>Contacto</Link></li>
                        <li><Link to={"/"}>Mis pedidos</Link></li>
                        <li><Link to={"/"}>Arma tu Pc</Link></li>
                    </ul>
                </div>
                <CardWidget cartCount={props.cartCount} />
            </nav>
        </header>
    )
};

export default NavBar;