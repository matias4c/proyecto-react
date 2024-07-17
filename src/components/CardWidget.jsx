const CardWidget = (props) => {
    return (
        <div className="btm-mn">
            <span><i className='bx bx-cart bx-sm'></i></span>
            <span className="cart-icon">{props.cartCount}</span>
        </div>
    )
};
export default CardWidget;