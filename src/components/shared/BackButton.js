import { useHistory } from 'react-router-dom';

export const BackButton = ({ path }) => {

  const history = useHistory();

  const handleBack = () => {
    history.push(`/${ path }`);
  };

  return (
    <button 
      className="btn btn-danger w-100 mt-3"
      onClick={ handleBack }
    >
      Back
    </button>
  );

};
