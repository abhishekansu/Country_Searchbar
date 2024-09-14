import React from 'react';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.length > 0 ? (
        countries.map((country) => (
          <div key={country.name} className="country-item">
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
          </div>
        ))
      ) : (
        <p>No countries found</p>
      )}
    </div>
  );
};

export default CountryList;
