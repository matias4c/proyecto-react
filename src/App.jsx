import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  // const [cartCount, setCartCount] = useState(5);

  const [carrito, setCarrito] = useState([]);

  

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar cartCount={0} />
        
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoria" element={<ItemListContainer  />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element= {<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        
          <Footer />
        
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App;
