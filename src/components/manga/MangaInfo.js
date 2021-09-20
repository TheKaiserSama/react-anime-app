import { SeparateByCommas } from '../../components/shared/SeparateByCommas';

export const MangaInfo = ({
  authors = [],
  chapters,
  genres = [],
  published,
  serializations = [],
  status,
  themes = [],
  type,
  volumes,
}) => {

  return (
    <>
      <h6>Information</h6>

      <p className="mb-1">
        <strong>Type: </strong>{ type }
      </p>
      <p className="mb-1">
        <strong>Chapters: </strong>{ chapters }
      </p>
      <p className="mb-1">
        <strong>Volumens: </strong>{ volumes || 0 }
      </p>
      <p className="mb-1">
        <strong>Status: </strong>{ status }
      </p>
      <p className="mb-1">
        <strong>Published: </strong>{ published?.string }
      </p>
      <p className="mb-1">
        <strong>Genres: </strong>
        <SeparateByCommas list={ genres }/>
      </p>
      <p className="mb-1">
        <strong>Theme: </strong>
        <SeparateByCommas list={ themes } />
      </p>
      <p className="mb-1">
        <strong>Serialization: </strong>
        <SeparateByCommas list={ serializations } />
      </p>
      <p className="mb-1">
        <strong>Authors: </strong>
        <SeparateByCommas list={ authors } />
      </p>
    </>
  );

};
