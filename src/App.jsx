import { useState } from "react";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  // const [cartCount, setCartCount] = useState(5);

  return (
    <>
      <NavBar cartCount={2} />
      <ItemListContainer greeting={"Bienvenidos a Mcompu. Tienda Gamer de computación y videojuegos."} />
    </>
  )
}

export default App;
