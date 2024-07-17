import { useEffect, useState } from "react";
import { pedirItemPorId } from "../pedirDatos";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [item, setItem] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    pedirItemPorId(id)
      .then((res) => { setItem(res) })
  }, [id])
  

  return (
    <>
      <ItemDetail {...item} />
    </>
  )
}

export default ItemDetailContainer;
