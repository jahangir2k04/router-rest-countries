import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {name, capital} = country;

    return (
        <div className='country'>
            <h3>Country : {name.common}</h3>
            <h4>Capital : {capital}</h4>
            <Link to={`/country/${name.common}`}><button>See More</button></Link>
        </div>
    );
};

export default Country;