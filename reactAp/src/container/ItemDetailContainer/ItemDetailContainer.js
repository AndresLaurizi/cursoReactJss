import React, { useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getProducts } from "../../utils/items/items"


export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  getProducts
  .then(resp => setProducto(resp.find(product => product.id == 1 )))
  .catch(err => console.log(err))
 


    return (
      <div>
         <ItemDetail producto = {producto} /> 
      </div>
    )
  }
