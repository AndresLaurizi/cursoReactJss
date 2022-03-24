import React, { useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import { getProducts } from "../utils/items/items"


export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  getProducts
  .then(resp => setProductos(resp))
  .catch(err => console.log(err))
 


    return (
      <div>
         <ItemList productos = {productos} /> 
      </div>
    )
  }
