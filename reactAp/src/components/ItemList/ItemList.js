import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"


export default function ItemList({productos}) {
  return (

    <div className="Items">
      <div className="espaciado">
       {productos.map(producto => <Item producto = {producto} key={producto.id} /> )}

      </div>
    </div>

  )
}

