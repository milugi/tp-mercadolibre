import React from 'react';
import Search from './Search';
import logoMl from '../assets/img/logo-ml.png'
import { Link } from 'react-router-dom'


const Header = ( { setBusqueda } ) => {
    return ( 
        <div className="header">
            <nav className="nav">
                <div className='logo'>
                    <Link to="/"><img src={logoMl} alt="" /></Link>
                </div>
                <Search
                    setBusqueda = {setBusqueda}
                />
            </nav>
        </div>
     );
}
 
export default Header;