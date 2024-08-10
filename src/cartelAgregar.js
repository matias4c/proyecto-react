export default function cartelAgregadoCarrito(){
    Toastify({
        text: "Producto agregado a tu carrito",
        duration: 1000,
        newWindow: false,
        close: false,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: false,
        style: {
          background: "linear-gradient(to right, #00b09b, #86b437)",
        }
    }).showToast();
  }