/* eslint-disable react/prop-types */
function MenuFilter({ changeFilter }) {
  const handleSubmit = (event) => {
    changeFilter(event.target.innerText);
  };

  return (
    <div className="m-0 m-auto p-0 m-4 m-auto bg-white rounded-md shadow-lg">
      <div className="flex flex-row justify-evenly  p-3">
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
    </div>
  );
}

export default MenuFilter;
