import { useState, useMemo } from 'react';

const useSearchUserInput = (array) => {
  const [query, setQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(array);

  useMemo(() => {
    const result = array.filter(country => {
      return country.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredCountries(result)
  }, [query, array])

  return { query, setQuery, filteredCountries }
};

export default useSearchUserInput;