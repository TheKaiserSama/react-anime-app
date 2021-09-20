import { useFetchList } from '../../hooks/useFetchList';
import { MangaCard } from './MangaCard';

export function MangaList({ page, term }) {

  const [ mangaList ] = useFetchList(
    `/search/manga?q=${ encodeURIComponent(term) }&order_by=title&sort=asc&page=${ page }`,
    { page, term }
  );

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      { mangaList.length > 0 &&
        mangaList.map(anime => (
          <MangaCard
            key={ anime.mal_id }
            { ...anime }
          />
        ))
      }
    </div>
  );

};
