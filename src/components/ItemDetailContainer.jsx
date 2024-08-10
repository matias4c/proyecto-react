import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {

  const [item, setItem] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((resp) => {
        setItem(
          { ...resp.data(), id: resp.id}
        );
      })

  }, [id])
  

  return (
    <>
      <ItemDetail {...item} />
    </>
  )
}

export default ItemDetailContainer;
