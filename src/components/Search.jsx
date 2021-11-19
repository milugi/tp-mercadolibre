import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Search = ( { setBusqueda } ) => {

    //State del input
    const [inputValue, setInputValue] = useState(''); 


    const handleInputChange = (e) => {
        
        setInputValue(e.target.value);

    }

    // Funcion del submit cuando haga enter en el form

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar

        if (inputValue.trim().length > 2){
            setBusqueda(inputValue);
            setInputValue('');
            this.props.history.Push('/');
        }
    }

    return ( 
        <form onSubmit={handleSubmit} className="search">
            <input 
                type="text" 
                placeholder = "Busca productos, marcas y mas..."
                name="busqueda"
                id="busqueda"
                value={inputValue}
                onChange={handleInputChange}
            />
            <a onClick={handleSubmit} className="content-icon">
                <Link to={`/`}>
                    <i class="fas fa-search"></i>
                </Link>
            </a>
        </form>
     );
}
 
export default Search;