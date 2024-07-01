import CardWidget from "../CardWidget/CardWidget";

const NavBar = (props) => {
    return (
        <header>
            <div className="nav-top">
                <div className="logo-nombre">
                    <a href=""><img src="./src/img/icon.png" className="logo" alt="logo" /></a>
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
                        <li><a href="#">Marcas<i className='bx bx-chevron-down'></i></a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Mis pedidos</a></li>
                        <li><a href="#">Arma tu Pc</a></li>
                    </ul>
                </div>
                <CardWidget cartCount={props.cartCount} />
            </nav>
        </header>
    )
};

export default NavBar;