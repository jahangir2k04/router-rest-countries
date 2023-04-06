import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = () => {
    const country = useLoaderData();
    const {name, capital, currencies, population, languages, area, region, flags} = country[0];
    console.log(country[0]);
    

    return (
        <div className='details'>
            <img src={flags.png} alt="" />
            <h3>Country : {name.common}</h3>
            <h4>Capital : {capital}</h4>
            <p>Region : {region}</p>
            <p>Language : {languages.eng}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
        </div>
    );
};

export default CountryDetail;