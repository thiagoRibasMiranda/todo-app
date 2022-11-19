/* eslint-disable react/prop-types */
function MenuFilter({ changeFilter }) {
  const handleSubmit = (event) => {
    changeFilter(event.target.innerText);
  };

  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        All
      </button>
      <button type="button" onClick={handleSubmit}>
        Active
      </button>
      <button type="button" onClick={handleSubmit}>
        Completed
      </button>
    </div>
  );
}

export default MenuFilter;
