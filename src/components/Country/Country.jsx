
import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry, handleVisitedCountryFlag}) => {
    const {name, flags, population, area} = country;

    const [visit, setVissit] = useState(false);

    const handleButton = () => {
        setVissit(!visit)
    }
 
    return (
        <div className={`country ${visit? 'visited' : ''}`}>
            <h3 style={{color: visit? 'blue' : 'black'}}>Name: {name?.common} </h3>
            <img src={flags?.png} alt={flags?.alt} />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <button onClick={() => {
                handleVisitedCountry(country);
                handleVisitedCountryFlag(country.flags.png);
            }}>Mark Visited</button>
            <br />
            <button onClick={handleButton}>{visit? 'Going' : 'visit'}</button>
            {visit ? 'I have visited this country' : 'I want to visited'}
        </div>
    );
};

export default Country;