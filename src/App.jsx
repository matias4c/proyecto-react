import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  // const [cartCount, setCartCount] = useState(5);

  return (
    <>
      <BrowserRouter>
        <NavBar cartCount={0} />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoria" element={<ItemListContainer  />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>

        {/* <ItemListContainer greeting={"Bienvenidos a Mcompu. Tienda Gamer de computación y videojuegos."} /> */}
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App;
