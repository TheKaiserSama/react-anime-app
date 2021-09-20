import { useParams } from 'react-router-dom';

import { useFetchOne } from '../../hooks/useFetchOne';
import { AnimeInfo } from './AnimeInfo';
import { BackButton } from '../shared/BackButton';
import { Background } from '../shared/Background';
import { Popularity } from '../shared/Popularity';
import { Related } from '../shared/Related';
import { Synopsis } from '../shared/Synopsis';
import { formatString } from '../../helpers/formatString';

export const AnimeScreen = () => {
  
  const { animeId } = useParams();
  const [ anime ] =  useFetchOne(`/anime/${ animeId }`, animeId);
  const {
    aired,
    background,
    genres = [],
    image_url,
    rating,
    related,
    synopsis,
    title,
  } = anime;

  return (
    <>
      <div className="row mt-5">
        <div className="col-3">
          <img src={ image_url } className="card-img-top" alt={ title } />

          <div className="row mt-3">
            <div className="col">
              <AnimeInfo { ...anime } />
            </div>
          </div>

          <BackButton path="anime" />
        </div>

        <div className="col-9">
          <h3>{ title } <span>({ aired?.prop.from.year })</span> </h3>

          <p>
            <span>{ rating }</span> &#8226; <span>{ formatString( genres ) }</span>
          </p>

          <Popularity { ...anime } />

          <Synopsis synopsis={ synopsis } />

          <Background background={ background } />

          <Related title="Anime" related={ related } />
        </div>
      </div>
    </>
  );

};
