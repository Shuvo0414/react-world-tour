import { useEffect, useState } from "react";
import Country from "../country/country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedCountryFlag, setVisitedCountryFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisited = [...visitedCountries, country];
    setVisitedCountries(newVisited);
  };

  const handleVisitedCountryFlag = (flag) => {
    console.log("flag");
    const newVisitedCountryFlag = [...visitedCountryFlag, flag];
    setVisitedCountryFlag(newVisitedCountryFlag);
  };

  return (
    <div>
      <h3>Countries {countries.length}</h3>
      <div>
        <h4>Visited Countries {visitedCountries.length}</h4>
        <ul className="flag">
          {visitedCountries.map((country) => (
            <li key={country.cca2}>{country.name.common}</li>
          ))}
          {visitedCountryFlag.map((flag, idx) => (
            <img key={idx} src={flag}></img>
          ))}
        </ul>
      </div>

      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedCountryFlag={handleVisitedCountryFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
