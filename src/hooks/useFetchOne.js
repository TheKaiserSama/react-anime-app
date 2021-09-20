import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.jikan.moe/v3';

export const useFetchOne = (url, id) => {

  const [ value, setValue ] = useState({});

  useEffect(() => {

    let controller = new AbortController();

    async function fetchOne() {
      try {

        const response = await fetch(
          `${ BASE_URL }${ url }`, {
            signal: controller.signal
          }
        );
        const data = await response.json();

        console.log(data)

        setValue(data);
        controller = null;

      } catch (error) { }
    }

    fetchOne();

    return () => controller?.abort();

  }, [ url, id ]);

  return [ value ];

};
