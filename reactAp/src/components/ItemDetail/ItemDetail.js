import React from 'react'
import "../Item/Item"


export default function ItemDetail({producto}) {
    return (
        <>
            <div className="card text-center">
                 <div className="card-header">
                    {producto.title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{producto.description}</h5>
                    <p className="card-text"> <img src={producto.pictureUrl} alt=""/> </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
                
            </div>
        </>
    )
}