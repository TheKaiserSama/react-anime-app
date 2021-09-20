import { useFetchList } from '../../hooks/useFetchList';
import { AnimeCard } from './AnimeCard';

export function AnimeList({ page, term }) {

  const [ animeList ] = useFetchList(
    `/search/anime?q=${ encodeURIComponent(term) }&order_by=title&sort=asc&page=${ page }`,
    { page, term }
  );

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      { animeList.length > 0 &&
        animeList.map(anime => (
          <AnimeCard
            key={ anime.mal_id }
            { ...anime }
          />
        ))
      }
    </div>
  );

};
