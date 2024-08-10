import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CardWidget = (props) => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="btm-mn">
            <Link to={"/cart"}><span><i className='bx bx-cart bx-sm'></i></span></Link>
            <span className="cart-icon">{cantidadEnCarrito()}</span>
        </div>
    )
};
export default CardWidget;