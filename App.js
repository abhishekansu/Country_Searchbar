import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('https://dpaste.com/79QXDY8TD')
      .then((response) => response.json())
      .then((data) => {
        const countryData = data.map((country) => ({
          name: country.name.common,
          capital: country.capital ? country.capital[0] : 'No Capital',
        }));
        setCountries(countryData);
        setFilteredCountries(countryData);
        setSuggestions(countryData.map((country) => country.name));
      });
  }, []);

  const handleSearch = (query) => {
    const result = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query.toLowerCase()) ||
        country.capital.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(result);
  };

  return (
    <div className="app">
      <h1>Country Search</h1>
      <SearchBar onSearch={handleSearch} suggestions={suggestions} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
