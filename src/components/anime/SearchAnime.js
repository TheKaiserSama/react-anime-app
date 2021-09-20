import { useState } from 'react';

export const SearchAnime = ({ setPage, setTerm, storedValue, setStoredValue }) => {

  const [ value, setValue ] = useState(storedValue.term);

  const handleValue = ({ target }) => {
    setValue(target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '' || value.trim().length >= 3) {
      setPage(1);
      setTerm(value);
      setStoredValue({ page: 1, term: value });
    }
  };

  return (
    
    <form 
      className="my-3"
      onSubmit={ handleSubmit }
    >
      <input
        className="form-control"
        name="searchAnime"
        value={ value }
        onChange={ handleValue }
        autoComplete="off"
        placeholder="Search anime"
        autoFocus
      />
    </form>

  );

};
