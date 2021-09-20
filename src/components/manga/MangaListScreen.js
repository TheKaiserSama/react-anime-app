import { useState } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { MangaList } from './MangaList';
import { SearchManga } from './SearchManga';

export const MangaListScreen = () => {
  
  const [ storedValue, setStoredValue ] = useLocalStorage('mangaParams', { page: 1, term: '' });
  const { page: initialPage, term: initialTerm } = storedValue;
  const [ page, setPage ] = useState( initialPage );
  const [ , setTerm ] = useState( initialTerm );

  const handleLoadLess = () => {
    const newPage = page - 1 === 0 ? 1 : page - 1;
    setPage(newPage);
    setStoredValue({ ...storedValue, page: newPage });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setStoredValue({ ...storedValue, page: page + 1 });
  };

  return (
    <div>
      <h2>Manga</h2>

      <SearchManga
        setPage={ setPage }
        setTerm={ setTerm }
        storedValue={ storedValue }
        setStoredValue={ setStoredValue }
      />

      <div className="row my-3">
        <div className="col">
          <button
            className="btn w-100 btn-danger"
            onClick={ handleLoadLess }
          >
            Load less
          </button>
        </div>

        <div className="col">
          <button
            className="btn w-100 btn-success"
            onClick={ handleLoadMore }
          >
            Load more
          </button>
        </div>
      </div>

      <MangaList
        page={ initialPage }
        term={ initialTerm }
      />
    </div>
  );

};
