import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InfoProducto = ( ) => {
    
    const { id } = useParams();

    // State para el item
    const [item, setItem] = useState({});
    const [descripcion, setDescripcion] = useState({})

    useEffect(() => {
        
        const getItem = async (id) => {
            const url = `https://api.mercadolibre.com/items/${id}`
            const resp = await fetch(url);
            const result = await resp.json();
            setItem(result)
            
            const url2 = `https://api.mercadolibre.com/items/${id}/description`
            const resp2 = await fetch(url2);
            const result2 = await resp2.json();
            setDescripcion(result2);
        }
        getItem(id);
        
    }, [])


    const thumbnail_id = item.thumbnail_id;
    const img = `https://http2.mlstatic.com/D_${thumbnail_id}-O.jpg`

    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
      })

    return ( 
        <>
            <div className="flex">

                <div className="home">

                        <div className="details">
                            
                            <div className="details-img">
                                <img src={img}/>
                            </div>
                              
                            <div className="details-info">
                                <h1 className="details-info-nuevo">NUEVO - {item.available_quantity} VENDIDOS</h1>
                                <h2 className="details-info-title">{item.title}</h2>
                                <h3 className="details-info-price">{formatter.format(item.price)}</h3>
                                <button className="details-info-button">Comprar</button>
                            </div>       
                        </div>
                        <div className="description-producto">
                            <h3 className="description-producto-title">Descripción del producto</h3>
                            <p className="description-producto-parrafo">{descripcion.plain_text}</p>
                        </div>
                </div>
            </div>
        </>
     );
}
 
export default InfoProducto;