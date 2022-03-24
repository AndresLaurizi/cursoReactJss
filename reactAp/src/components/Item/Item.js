import React from 'react'
import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"

export default function Item({producto}) {
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    {producto.title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{producto.description}</h5>
                    <p className="card-text">{producto.pictureUrl}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
                <ItemCount stock = {producto.stock} inicial = "1" />
            </div>
        </>
    )
}

