import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData();

    return (
        <div>
            <h3>All countries are Here : {countries.length}</h3>
            <div>
                {
                    countries.map(country => 
                    <Country
                        key={country.cca3}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;