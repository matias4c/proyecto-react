
const Footer = () => {
  return (
    <footer>
            <section className="cards">
                <div>
                    <i className='bx bx-package bx-lg'></i>
                    <h4>Realizamos envios</h4>
                    <p>Conoce nuestros medios de envios disponibles</p>
                </div>
                <div>
                    <i className='bx bx-credit-card bx-lg'></i>
                    <h4>Paga tus compras aqui</h4>
                    <p>Conoce todos los medios de pagos disponibles</p>
                </div>
                <div>
                    <i className='bx bx-support bx-lg'></i>
                    <h4>Soporte</h4>
                    <p>Comunicate con nosotros</p>
                </div>
            </section>
            <section className="info">
                <div className="info-sec">
                    <h4>MCompu - Tienda Gamer</h4>
                    <p>Tienda Gamer de computación y videojuegos.</p>
                    <p><i className='bx bxs-map' ></i>Bv Illia, Cordoba, Argentina.</p>
                    <p><i className='bx bx-mobile-alt'></i>+543510000000</p>
                    <p><i className='bx bx-time-five' ></i>Lunes a Viernes de 10 a 18:30 - Sabados de 10 a 14 hs</p>
                    <p><i className='bx bx-envelope' ></i>v########@gmail.com</p>
                </div>
                
                <div className="info-sec sec-p">
                    <h4>Informacion</h4>
                    <div className="info-trd">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Mis pedidos</a></li>
                            <li><a href="#">Arma tu Pc</a></li>
                            <li><a href="#">Terminos y condiciones</a></li>
                            <li><a href="#">Promociones con tarjeta</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="info-sec sec-p">
                    <h4>Categorias</h4>
                    <div className="info-trd">
                        <ul>
                            <li><a href="#">Componentes de Pc</a></li>
                            <li><a href="#">Perifericos</a></li>
                            <li><a href="#">Videojuegos</a></li>
                            <li><a href="#">Monitores</a></li>
                            <li><a href="#">Notebooks</a></li>
                            <li><a href="#">PC Armadas</a></li>
                            <li><a href="#">Sillas Gamer</a></li>
                            <li><a href="#">Tabletas Graficas</a></li>
                            <li><a href="#">Almacenamiento</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="info-sec">
                    <h4>Seguinos</h4>
                    <div className="info-icon">
                        <a target="_blank" href=""><i className='bx bxl-instagram bx-sm instagram'></i></a>
                        <a target="_blank" href=""><i className='bx bxl-facebook bx-sm facebook'></i></a>
                        <a target="_blank" href=""><i className='bx bxl-youtube bx-sm youtube'></i></a>
                        <a target="_blank" href=""><i className='bx bxl-twitter bx-sm twitter'></i></a>             
                    </div>
                </div>
            </section>
            
            <div className="img-p"><img src="/public/icon.png" className="logo-foo" alt="logo" /></div>

            <div className="develop">
                <a href="">Desarrollado y Diseñado por Matias Gabriel</a>
            </div>
    </footer>
    )
}

export default Footer;
