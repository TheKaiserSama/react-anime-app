import { SeparateByCommas } from '../shared/SeparateByCommas';

export const AnimeInfo = ({
  aired,
  duration,
  episodes,
  status,
  studios = [],
  themes = [],
  type
}) => {
  
  return (
    <>
      <h6>Information</h6>

      <p className="mb-1">
        <strong>Type: </strong>{ type }
      </p>
      <p className="mb-1">
        <strong>Episodes: </strong>{ episodes }
      </p>
      <p className="mb-1">
        <strong>Status: </strong>{ status }
      </p>
      <p className="mb-1">
        <strong>Aired: </strong>{ aired?.string }
      </p>
      <p className="mb-1">
        <strong>Studios: </strong>
        <SeparateByCommas list={ studios } />
      </p>
      <p className="mb-1">
        <strong>Theme: </strong>
        <SeparateByCommas list={ themes } />
      </p>
      <p className="mb-1">
        <strong>Duration: </strong>{ duration }
      </p> 
    </>
  );
  
};
