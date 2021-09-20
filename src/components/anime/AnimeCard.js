import { Link } from 'react-router-dom';

export const AnimeCard = ({
  image_url,
  mal_id,
  synopsis,
  title,
}) => {

  return (
    <div className="col">
      <div className="card">
        <img src={ image_url } className="card-img-top" alt={ title } />

        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ synopsis }</p>
        </div>

        <Link
          className="btn btn-outline-primary"
          to={ `/anime/${ mal_id }` }
        >
          See more...
        </Link>
      </div>
    </div>
  );

};
