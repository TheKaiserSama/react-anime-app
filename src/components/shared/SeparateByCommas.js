export const SeparateByCommas = ({ list = [] }) => {

  const generateLinks = () => {
    return list.map(({ mal_id, name  }, i) => (
      <button
        key={ mal_id }
        type="button"
        className="btn btn-sm btn-link p-0"
      >
        { i !== list.length - 1 ? `${ name },` : name }
      </button>
    ));
  };

  return (
    <>
      { generateLinks() }
    </>
  );

};
