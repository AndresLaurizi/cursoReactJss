import './Contador.css'
import React, { useEffect, useState } from 'react'


export default function ItemCount({ stock, inicial }) {

  const [contador, setCount] = useState(parseInt(inicial))
  const [desactivadoBtn, setDesactivadoBtn] = useState(false);
  const [stockNuevo, setStockNuevo] = useState(parseInt(stock))

  const resta = () => {
    if (contador === 1) {
      alert("el minimo para ingresar es 1")
    }
    else {
      setCount(contador - 1)
    }
  }
  const suma = () => {
    if (contador < stockNuevo) {
      setCount(contador + 1)
    } 
  }

  const agregar = () => {
    setStockNuevo(stockNuevo - contador)
    console.log(stockNuevo)
  }

 useEffect(() => {

  if (stock!=0){
    if(stockNuevo===0){
      alert("Sin stock")
      setDesactivadoBtn(true)
    }
  }
  else{
    setDesactivadoBtn(true)
  }
   
   setCount(parseInt(inicial))
 },[stockNuevo,inicial])

  return (
    <>
       
      <div className="botonera" >
        <button onClick={resta} className="resta">-</button>
        <p className="result">{contador}</p>
        <button onClick={suma} className="suma">+</button>
      </div>
      <div>   
      <button onClick= {agregar} disabled= {desactivadoBtn} >Agregar carrito  </button>
      </div>
    </>
  )
}

