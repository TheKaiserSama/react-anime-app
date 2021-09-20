import { useEffect, useState } from 'react';

function getStorageValue(key, defaultValue) {

  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  
  return initial || defaultValue;

}

export const useLocalStorage = (key, defaultValue) => {

  const [ storedValue, setStoredValue ] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [ key, storedValue ]);

  return [ storedValue, setStoredValue ];

};

