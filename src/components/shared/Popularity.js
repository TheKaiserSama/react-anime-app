export const Popularity = ({ members, popularity, rank, score }) => {

  return (
    <div className="row my-3">
      <div className="d-flex flex-column align-items-center col-2">
        <button className="btn btn-sm btn-primary">Score</button>
        <strong>{ score }</strong>
      </div>
      
      <div className="col-3">
        <p>Ranked <strong>#{ rank }</strong></p>
      </div>

      <div className="col-3">
        <p>Popularity <strong>#{ popularity }</strong></p>
      </div>

      <div className="col-4">
        <p>Members <strong>#{ members }</strong></p>
      </div>
    </div>
  );

};
