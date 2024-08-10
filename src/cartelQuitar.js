export default function cartelQuitadoCarrito(){
    Toastify({
        text: "Producto eliminado de tu carrito",
        duration: 1000,
        newWindow: false,
        close: false,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: false,
        style: {
          background: "linear-gradient(to right, #dc143c, #dd2748, #de3654)",
        }
    }).showToast();
  }