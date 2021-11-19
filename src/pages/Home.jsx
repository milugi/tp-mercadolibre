import React, {useState, useEffect} from 'react';
import CardProductos from './CardProductos';



const Home = ( { data } ) => {


    return (
        
        <>
            <CardProductos 
                data = {data}
            />
        </>
     );
}

 
export default Home;