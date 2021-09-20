import { useParams } from 'react-router-dom';

import { useFetchOne } from '../../hooks/useFetchOne';
import { MangaInfo } from './MangaInfo';
import { BackButton } from '../shared/BackButton';
import { Background } from '../shared/Background';
import { Popularity } from '../shared/Popularity';
import { Related } from '../shared/Related';
import { Synopsis } from '../shared/Synopsis';
import { formatString } from '../../helpers/formatString';

export const MangaScreen = () => {

  const { mangaId } = useParams();
  const [ manga ] =  useFetchOne(`/manga/${ mangaId }`, mangaId);
  const {
    background,
    genres = [],
    image_url,
    published,
    related,
    title,
    synopsis,
  } = manga;

  return (
    <>
      <div className="row mt-5">
        <div className="col-3">
          <img src={ image_url } className="card-img-top" alt={ title } />

          <div className="row mt-3">
            <div className="col">
              <MangaInfo { ...manga } />
            </div>
          </div>

          <BackButton path="manga" />
        </div>

        <div className="col-9">
          <h3>{ title } <span>({ published?.prop.from.year })</span> </h3>

          <p>
            <span>{ formatString( genres ) }</span>
          </p>

          <Popularity { ...manga } />

          <Synopsis synopsis={ synopsis } />

          <Background background={ background } />

          <Related  title="Manga" related={ related } />
        </div>
      </div>
    </>
  );

};
