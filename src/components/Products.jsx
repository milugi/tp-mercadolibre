import React from 'react';
import { Link } from 'react-router-dom'

const Products = ( {data} ) => {


    const price = data.prices.prices[0].amount;
    const title = data.title;
    const localidad = data.address.state_name;
    const thumbnail_id = data.thumbnail_id;
    const img = `https://http2.mlstatic.com/D_${thumbnail_id}-O.jpg`


    return ( 
        <>
            <div className="card-img">
                <Link to={`/info-producto/${data.id}`}><img src={img}/> </Link>                        
            </div>
                        
            <div className="card-info">
                
                <div className="card-precio-loc">
                    <h3>$ {price}</h3>
                    <p>{localidad}</p>
                </div>
                
                <div className="card-descripcion">
                     
                        
                        <p>{title}</p>
                </div>
            </div>
        </>
     );
}
 
export default Products;