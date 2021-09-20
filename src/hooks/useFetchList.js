import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.jikan.moe/v3';

export const useFetchList = (url, { page, term }) => {
  
  const [ values, setValues ] = useState([]);

  useEffect(() => {

    let controller = new AbortController();

    async function fetchList() {

      try {
        
        const response = await fetch(
          `${ BASE_URL }${ url }`, {
            signal: controller.signal
          });
        const data = await response.json();
  
        setValues([ ...data.results ]);
        controller = null;

      } catch (error) { }

    }

    fetchList();

    return () => controller?.abort();

  }, [ url, page, term ]);

  return [ values ];

};
